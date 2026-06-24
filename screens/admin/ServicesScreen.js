import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function ServicesScreen({
  navigation,
  route,
}) {
  const isSelecting =
    route.params?.selectMode || false;

  const [search, setSearch] = useState('');

  const services = [
    {
      id: '1',
      name: 'Alongamento Fibra de Vidro',
      price: 'R$ 150,00',
      duration: '120 min',
    },
    {
      id: '2',
      name: 'Alongamento Molde F1',
      price: 'R$ 150,00',
      duration: '145 min',
    },
    {
      id: '3',
      name: 'Banho de Gel',
      price: 'R$ 100,00',
      duration: '60 min',
    },
    {
      id: '4',
      name: 'Banho de Gel + Esmaltação em Gel',
      price: 'R$ 160,00',
      duration: '90 min',
    },
    {
      id: '5',
      name: 'Banho de Gel + Esmaltação Tradicional',
      price: 'R$ 130,00',
      duration: '85 min',
    },
    {
      id: '6',
      name: 'Blindagem',
      price: 'R$ 60,00',
      duration: '40 min',
    },
    {
      id: '7',
      name: 'Blindagem + Esmaltação em Gel',
      price: 'R$ 120,00',
      duration: '80 min',
    },
    {
      id: '8',
      name: 'Esmaltação em Gel',
      price: 'R$ 60,00',
      duration: '75 min',
    },
    {
      id: '9',
      name: 'Manutenção + Esmaltação Comum',
      price: 'R$ 130,00',
      duration: '120 min',
    },
    {
      id: '10',
      name: 'Manutenção Gel',
      price: 'R$ 100,00',
      duration: '90 min',
    },
    {
      id: '11',
      name: 'Mão',
      price: 'R$ 33,00',
      duration: '30 min',
    },
    {
      id: '12',
      name: 'Pé',
      price: 'R$ 33,00',
      duration: '30 min',
    },
    {
      id: '13',
      name: 'Pé e Mão',
      price: 'R$ 66,00',
      duration: '60 min',
    },
    {
      id: '14',
      name: 'Spa dos Pés',
      price: 'R$ 80,00',
      duration: '60 min',
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleSelectService = (
    serviceName
  ) => {
    if (!isSelecting) return;

    navigation.navigate(
      'NovoAgendamento',
      {
        selectedService: serviceName,
      }
    );
  };

  const renderService = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        handleSelectService(item.name)
      }
    >
      <Text style={styles.serviceName}>
        💅 {item.name}
      </Text>

      <Text style={styles.details}>
        ⏱ {item.duration}
      </Text>

      <Text style={styles.price}>
        💰 {item.price}
      </Text>

      {isSelecting && (
        <Text style={styles.selectText}>
          Toque para selecionar
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {isSelecting && (
        <Text style={styles.selectTitle}>
          Selecionar Serviço
        </Text>
      )}

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Pesquisar serviço..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        showsVerticalScrollIndicator={false}
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

  selectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#333',
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  details: {
    marginTop: 6,
    fontSize: 14,
    color: '#666',
  },

  price: {
    marginTop: 6,
    color: '#555',
    fontSize: 15,
    fontWeight: 'bold',
  },

  selectText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B89FA8',
  },
});