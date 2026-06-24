import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import MenuCard from '../../components/MenuCard';

export default function ClientHomeScreen() {
  const navigation = useNavigation();

  const openWhatsAppFlaviane = () => {
    const mensagem =
      'Olá Flaviane! Gostaria de informações sobre seus serviços.';

    Linking.openURL(
      `https://wa.me/5535988679469?text=${encodeURIComponent(
        mensagem
      )}`
    );
  };

  const openInstagram = () => {
    Linking.openURL(
      'https://instagram.com/flaviane_manicure_'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#D4C3CB"
      />

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <MenuCard
        icon="📅"
        title="Novo Agendamento"
        description="Agendar um novo horário"
        onPress={() =>
          navigation.navigate('NovoAgendamento')
        }
      />

      <MenuCard
        icon="🗓"
        title="Meus Agendamentos"
        description="Visualizar seus horários"
        onPress={() =>
          navigation.navigate('MeusAgendamentos')
        }
      />

      <MenuCard
        icon="💅"
        title="Serviços"
        description="Ver serviços disponíveis"
        onPress={() =>
          navigation.navigate('Servicos')
        }
      />

      <MenuCard
        icon="👤"
        title="Meu Perfil"
        description="Editar seus dados"
        onPress={() =>
          navigation.navigate('Perfil')
        }
      />

      <TouchableOpacity
        style={styles.instagramButton}
        onPress={openInstagram}
      >
        <FontAwesome
          name="instagram"
          size={30}
          color="#FFF"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.whatsappButton}
        onPress={openWhatsAppFlaviane}
      >
        <FontAwesome
          name="whatsapp"
          size={30}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4C3CB',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },

  instagramButton: {
    position: 'absolute',
    right: 95,
    bottom: 30,
    backgroundColor: '#E1306C',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  whatsappButton: {
    position: 'absolute',
    right: 25,
    bottom: 30,
    backgroundColor: '#25D366',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});