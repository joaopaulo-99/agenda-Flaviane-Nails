import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#B89FA8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  avatarText: {
    fontSize: 40,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },

  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  dateButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },

  selectedDate: {
    backgroundColor: '#B89FA8',
  },

  dateText: {
    color: '#333',
  },

  selectedDateText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  timeButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
    margin: 5,
    minWidth: 70,
    alignItems: 'center',
  },

  selectedTime: {
    backgroundColor: '#B89FA8',
  },

  timeText: {
    color: '#333',
  },

  selectedTimeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  occupiedTime: {
    backgroundColor: '#ffd6d6',
    borderColor: '#ff4d4d',
  },

  occupiedTimeText: {
    color: '#cc0000',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#B89FA8',
    padding: 18,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});