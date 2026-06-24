import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function ClientsScreen() {
  const clients = [
    { id: '1', name: 'Maria Silva' },
    { id: '2', name: 'Ana Souza' },
    { id: '3', name: 'Juliana Lima' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clientes</Text>

      <FlatList
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.clientName}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
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
    marginBottom: 20,
    marginTop: 40,
    color: '#333',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  clientName: {
    fontSize: 16,
    color: '#333',
  },
});