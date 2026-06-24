import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/client/SplashScreen';
import ClientHomeScreen from './screens/client/ClientHomeScreen';
import ProfileScreen from './screens/client/ProfileScreen';

import NewAppointmentScreen from './screens/admin/NewAppointmentScreen';
import ScheduleScreen from './screens/admin/ScheduleScreen';
import ServicesScreen from './screens/admin/ServicesScreen';

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#D4C3CB',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#333',
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Entrar',
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Cadastrar',
          }}
        />

        <Stack.Screen
          name="Home"
          component={ClientHomeScreen}
          options={{
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="NovoAgendamento"
          component={NewAppointmentScreen}
        />

        <Stack.Screen
          name="MeusAgendamentos"
          component={ScheduleScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Servicos"
          component={ServicesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}