import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4C3CB',
    padding: 20,
    paddingTop: 30,
  },

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: '#B89FA8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  avatarText: {
    fontSize: 40,
  },

  adminTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },

  welcome: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },

  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginTop: 30,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  client: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  info: {
    fontSize: 15,
    marginBottom: 4,
    color: '#444',
  },

  statusContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },

  confirmButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },

  finishButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  editButton: {
    flex: 1,
    backgroundColor: '#B89FA8',
    padding: 12,
    borderRadius: 10,
    marginRight: 5,
  },

  deleteButton: {
    flex: 1,
    backgroundColor: '#D96C75',
    padding: 12,
    borderRadius: 10,
    marginLeft: 5,
  },

  whatsappButton: {
    backgroundColor: '#25D366',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});