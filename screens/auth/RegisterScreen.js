import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Alert,
} from 'react-native';

import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  doc,
  setDoc,
} from 'firebase/firestore';

import {
  auth,
  db,
} from '../../services/firebase';

import CustomButton from '../../components/CustomButton';

export default function RegisterScreen({
  navigation,
}) {
  const [name, setName] =
    useState('');

  const [phone, setPhone] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleRegister = async () => {
    if (
      !name ||
      !phone ||
      !email ||
      !password
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await setDoc(
        doc(
          db,
          'users',
          userCredential.user.uid
        ),
        {
          name,
          phone,
          email,
          role: 'client',
        }
      );

      Alert.alert(
        'Sucesso',
        'Cadastro realizado com sucesso!'
      );

      navigation.replace('Login');
    } catch (error) {
      console.log(error);

      Alert.alert(
        'Erro',
        'Não foi possível realizar o cadastro.'
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
        title="Cadastrar"
        onPress={handleRegister}
      />

      <CustomButton
        title="Voltar para Login"
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingTop: 120,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 60,
  },

  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
});