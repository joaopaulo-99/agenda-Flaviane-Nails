import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';

import CustomButton from '../../components/CustomButton';

export default function LoginScreen() {
  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
        title="Entrar"
        onPress={() =>
          Alert.alert(
            'Teste',
            'Botão funcionando'
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingTop: 100,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 50,
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