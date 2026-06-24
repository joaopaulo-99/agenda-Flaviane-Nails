import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Header from '../../components/Header';
import MenuCard from '../../components/MenuCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#D4C3CB"
      />

      <Header />

      <Text style={styles.sectionTitle}>
        Painel Administrativo
      </Text>

      <MenuCard
        icon="📅"
        title="Novo Agendamento"
        description="Criar um novo agendamento"
      />

      <MenuCard
        icon="👥"
        title="Clientes"
        description="Gerenciar clientes"
      />

      <MenuCard
        icon="🗓"
        title="Agenda"
        description="Visualizar agendamentos"
      />

      <MenuCard
        icon="💅"
        title="Serviços"
        description="Gerenciar serviços e preços"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 35,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
});