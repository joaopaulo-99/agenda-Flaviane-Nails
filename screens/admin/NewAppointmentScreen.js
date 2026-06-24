import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  collection,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../../services/firebase';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';

import styles from './NewAppointmentStyles';

export default function NewAppointmentScreen() {

  const navigation = useNavigation();
  const route = useRoute();

const editData = route?.params?.editData || null;

const [service, setService] = useState('');
const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');
const [appointments, setAppointments] = useState([]);

useEffect(() => {
  const unsubscribe = onSnapshot(
    collection(db, 'appointments'),
    (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAppointments(data);
    }
  );

  return unsubscribe;
}, []);

useFocusEffect(
  React.useCallback(() => {
    const data = route.params?.editData;

    const selectedService =
      route.params?.selectedService;

    if (selectedService) {
      setService(selectedService);
    }

 if (data) {
  setService(data.servico);
  setSelectedDate(data.data);
  setSelectedTime(data.horario);
}
  }, [route.params])
);

  const dayNames = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sáb',
  ];

  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();

    currentDate.setDate(
      currentDate.getDate() + i
    );

    const dayName =
      dayNames[currentDate.getDay()];

    const day = String(
      currentDate.getDate()
    ).padStart(2, '0');

    const month = String(
      currentDate.getMonth() + 1
    ).padStart(2, '0');

    if (i === 0) {
      weekDays.push(`Hoje (${day}/${month})`);
    } else if (i === 1) {
      weekDays.push(`Amanhã (${day}/${month})`);
    } else {
      weekDays.push(
        `${dayName} ${day}/${month}`
      );
    }
  }

  const availableTimes = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
  ];

  const availableTimesFiltered =
  availableTimes.filter((hour) => {

    if (!selectedDate.startsWith('Hoje')) {
      return true;
    }

    const now = new Date();

    const currentMinutes =
      now.getHours() * 60 +
      now.getMinutes();

    const [h, m] = hour.split(':');

    const timeMinutes =
      Number(h) * 60 +
      Number(m);

    // exige 30 minutos de antecedência
    return timeMinutes >= currentMinutes + 30;
  });

  const occupiedTimes = appointments
  .filter((item) => {
    if (editData) {
      return (
        item.data === selectedDate &&
        item.id !== editData.id
      );
    }

    return item.data === selectedDate;
  })
  .map((item) => item.horario);

  const handleSave = async () => {
  if (
  !service ||
  !selectedDate ||
  !selectedTime
  ){
      Alert.alert(
        'Campos obrigatórios',
        'Preencha todos os campos.'
      );
      return;
    }

if (editData) {
  Alert.alert(
    'Aviso',
    'A edição de agendamentos ainda não foi implementada.'
  );
  return;
}

const profileData =
  await AsyncStorage.getItem('profile');

const profile = profileData
  ? JSON.parse(profileData)
  : {};

await addDoc(
  collection(db, 'appointments'),
  {
    cliente: profile.name || 'Cliente',
    telefone: profile.phone || '',
    servico: service,
    data: selectedDate,
    horario: selectedTime,
    status: 'pendente',
    createdAt: new Date(),
  }
);

Alert.alert(
  'Sucesso',
  'Agendamento realizado com sucesso!'
);

  setService('');
  setSelectedDate('');
  setSelectedTime('');

  navigation.navigate('MeusAgendamentos');

  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {editData
          ? 'Editar Agendamento'
          : 'Novo Agendamento'}
      </Text>


<Text style={styles.sectionTitle}>
  Serviço
</Text>

<TouchableOpacity
  style={styles.input}
  onPress={() =>
    navigation.navigate(
      'Servicos',
      {
        selectMode: true,
      }
    )
  }
>
  <Text
    style={{
      color: service
        ? '#000'
        : '#999',
    }}
  >
    {service ||
      'Selecionar Serviço'}
  </Text>
</TouchableOpacity>

      <Text style={styles.sectionTitle}>
        Escolha uma Data
      </Text>

      <View style={styles.dateContainer}>
        {weekDays.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dateButton,
              selectedDate === day &&
                styles.selectedDate,
            ]}
            onPress={() =>
              setSelectedDate(day)
            }
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === day &&
                  styles.selectedDateText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedDate !== '' && (
        <>
          <Text style={styles.sectionTitle}>
            Horários Disponíveis
          </Text>

          <View style={styles.timeContainer}>
            {availableTimesFiltered.map((hour) => {
              const isOccupied =
                occupiedTimes.includes(hour);

              return (
                <TouchableOpacity
                  key={hour}
                  disabled={isOccupied}
                  style={[
                    styles.timeButton,
                    selectedTime === hour &&
                      styles.selectedTime,
                    isOccupied &&
                      styles.occupiedTime,
                  ]}
                  onPress={() =>
                    setSelectedTime(hour)
                  }
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === hour &&
                        styles.selectedTimeText,
                      isOccupied &&
                        styles.occupiedTimeText,
                    ]}
                  >
                    {hour}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          {editData
            ? 'Salvar Alterações'
            : 'Salvar Agendamento'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}