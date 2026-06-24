import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Text,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await AsyncStorage.getItem('profile');

      if (data) {
        const profile = JSON.parse(data);

        setName(profile.name || '');
        setEmail(profile.email || '');
        setPhone(profile.phone || '');
        setBirthDate(profile.birthDate || '');
        setCpf(profile.cpf || '');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length <= 2) return numbers;

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(
      2,
      7
    )}-${numbers.slice(7, 11)}`;
  };

  const formatCpf = (value) => {
    const numbers = value.replace(/\D/g, '');

    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const formatBirthDate = (value) => {
    const numbers = value.replace(/\D/g, '');

    return numbers
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2');
  };

  const saveProfile = async () => {
    try {
      const profile = {
        name,
        email,
        phone,
        birthDate,
        cpf,
      };

      await AsyncStorage.setItem(
        'profile',
        JSON.stringify(profile)
      );

      Alert.alert(
        'Sucesso',
        'Perfil salvo com sucesso!',
        [
          {
            text: 'OK',
            onPress: () =>
              navigation.navigate('Home'),
          },
        ]
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {name
              ? name.charAt(0).toUpperCase()
              : '👤'}
          </Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(text) =>
          setPhone(formatPhone(text))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        keyboardType="numeric"
        value={birthDate}
        onChangeText={(text) =>
          setBirthDate(
            formatBirthDate(text)
          )
        }
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={(text) =>
          setCpf(formatCpf(text))
        }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={saveProfile}
      >
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 30,
  },

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#B89FA8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  avatarText: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#B89FA8',
    padding: 18,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 30,
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});