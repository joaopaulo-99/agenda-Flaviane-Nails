import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Flaviane Aparecida
      </Text>

      <Text style={styles.subtitle}>
        Nail Designer
      </Text>

      <Text style={styles.date}>
        {currentDate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    width: 120,
    height: 200,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },

  date: {
    marginTop: 8,
    fontSize: 15,
    color: '#888',
  },
});