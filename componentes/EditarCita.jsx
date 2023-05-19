import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';


const EditarCita = ({ modalEditar, setModalEditar, editar, handleGuardarEditado }) => {
    Alert.alert('Error',editar.id+ ' '+ editar.paciente);
    const pac = editar.paciente;
    const [paciente, setPaciente] = useState(pac);
    const [propietario, setPropietario] = useState(editar.propietario);
    const [email, setEmail] = useState(editar.email);
    const [telefono, setTelefono] = useState(editar.telefono);
    const [sintomas, setSintomas] = useState(editar.sintomas);

  const handleGuardar = () => {
    if ([paciente, propietario, email, telefono, sintomas].includes('')) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    const pacienteEditado = {
      id: editar.id,
      paciente: paciente,
      propietario: propietario,
      email: email,
      telefono: telefono,
      sintomas: sintomas
    };

    handleGuardarEditado(pacienteEditado);

  };

  return (
    <Modal visible={modalEditar}>
    <View style={styles.modal}>
      <Text style={styles.modalTitle}>Editar cita</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre paciente"
        placeholderTextColor="#aaa"
        onChangeText={setPaciente}
        value={paciente}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre propietario"
        placeholderTextColor="#aaa"
        onChangeText={setPropietario}
        value={propietario}
      />
      <TextInput
        style={styles.input}
        placeholder="Email propietario"
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono propietario"
        placeholderTextColor="#aaa"
        onChangeText={setTelefono}
        value={telefono}
      />
      <TextInput
        style={[styles.input, styles.inputSintomas]}
        placeholder="Síntomas"
        placeholderTextColor="#aaa"
        multiline={true}
        onChangeText={setSintomas}
        value={sintomas}
      />

      <TouchableOpacity style={styles.btnGuardar} onPress={handleGuardar}>
        <Text style={styles.btnTextGuardar}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCancelar} onPress={() => setModalEditar(false)}>
        <Text style={styles.btnTextCancelar}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 100,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0a1311',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  inputSintomas: {
    height: 100,
    textAlignVertical: 'top',
  },
  btnGuardar: {
    backgroundColor: '#4e5c56',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btnTextGuardar: {},
  btnCancelar: {
    backgroundColor: '#092b38',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btnTextCancelar: {},
});

export default EditarCita;
