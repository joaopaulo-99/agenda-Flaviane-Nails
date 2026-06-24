import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

import styles from './ScheduleStyles';

import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../../services/firebase';

export default function ScheduleScreen({
  navigation,
}) {
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'appointments'),
      (snapshot) => {
        const data = snapshot.docs.map(
          (document) => ({
            id: document.id,
            ...document.data(),
          })
        );

        setAppointments(data);
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, []);

  const updateStatus = async (
    id,
    status
  ) => {
    try {
      await updateDoc(
        doc(db, 'appointments', id),
        {
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointment = async (id) => {
    Alert.alert(
      'Cancelar Agendamento',
      'Deseja realmente cancelar este agendamento?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            await deleteDoc(
              doc(db, 'appointments', id)
            );
          },
        },
      ]
    );
  };

  const editAppointment = (appointment) => {
    navigation.navigate(
      'NovoAgendamento',
      {
        editData: appointment,
      }
    );
  };

  const openWhatsApp = (
    phone,
    client
  ) => {
    if (!phone) {
      Alert.alert(
        'Aviso',
        'Cliente sem telefone cadastrado.'
      );
      return;
    }

    const cleanPhone =
      phone.replace(/\D/g, '');

    const url =
      `https://wa.me/55${cleanPhone}?text=` +
      encodeURIComponent(
        `Olá ${client}, tudo bem?`
      );

    Linking.openURL(url);
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.client}>
        {item.cliente}
      </Text>

      <Text style={styles.info}>
        💅 Serviço: {item.servico}
      </Text>

      <Text style={styles.info}>
        📅 Data: {item.data}
      </Text>

      <Text style={styles.info}>
        🕒 Horário: {item.horario}
      </Text>

      <Text style={styles.info}>
        📞 Telefone: {item.telefone}
      </Text>

      <Text style={styles.info}>
        📌 Status: {item.status}
      </Text>

      <View style={styles.statusContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            updateStatus(
              item.id,
              'confirmado'
            )
          }
        >
          <Text style={styles.buttonText}>
            Confirmar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.finishButton}
          onPress={() =>
            updateStatus(
              item.id,
              'concluído'
            )
          }
        >
          <Text style={styles.buttonText}>
            Concluir
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            editAppointment(item)
          }
        >
          <Text style={styles.buttonText}>
            Editar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() =>
            deleteAppointment(item.id)
          }
        >
          <Text style={styles.buttonText}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.whatsappButton}
        onPress={() =>
          openWhatsApp(
            item.telefone,
            item.cliente
          )
        }
      >
        <Text style={styles.buttonText}>
          WhatsApp
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          👑
        </Text>
      </View>

      <Text style={styles.adminTitle}>
        Painel Administrativo
      </Text>

      <Text style={styles.welcome}>
        Bem-vinda, Flaviane!
      </Text>
    </View>

    {appointments.length === 0 ? (
      <Text style={styles.empty}>
        Nenhum agendamento cadastrado.
      </Text>
    ) : (
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
        showsVerticalScrollIndicator={false}
      />
    )}
  </View>
);

}