import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function SplashScreen({
  navigation,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image
        source={require('../../assets/splash-screen.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2F1',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});