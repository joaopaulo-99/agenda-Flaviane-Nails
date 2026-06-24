import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Agendamentos de Hoje
      </Text>

      <View style={styles.card}>
        <Text style={styles.time}>09:00</Text>
        <Text style={styles.client}>Maria Silva</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>10:30</Text>
        <Text style={styles.client}>Ana Souza</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>14:00</Text>
        <Text style={styles.client}>Juliana Lima</Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total Hoje: 3
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    color: '#333',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  client: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },

  summary: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#B89FA8',
    borderRadius: 12,
  },

  summaryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});