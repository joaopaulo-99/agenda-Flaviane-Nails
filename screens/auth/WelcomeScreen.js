import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

import CustomButton from '../../components/CustomButton';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Entrar"
          onPress={() => {}}
        />

        <CustomButton
          title="Criar conta"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },

  buttonsContainer: {
    gap: 15,
  },
});