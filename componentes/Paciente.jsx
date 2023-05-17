import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Paciente = ({ item, handleEliminarCita, handleEditarCita }) => {
  const { id, paciente, propietario } = item;

  const handleEliminar = () => {
    handleEliminarCita(id);
  };

  const handleEditar = () => {
    handleEditarCita(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{paciente}</Text>
      <Text style={styles.text}>{propietario}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEliminar}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditar}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: '#666a7c',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default Paciente;
