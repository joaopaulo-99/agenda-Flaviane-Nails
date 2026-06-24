import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function MenuCard({
  icon,
  title,
  description,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.icon}>
        {icon}
      </Text>

      <View>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E6D8DE',
  },

  icon: {
    fontSize: 28,
    marginRight: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },

  description: {
    fontSize: 13,
    color: '#777777',
    marginTop: 2,
  },
});