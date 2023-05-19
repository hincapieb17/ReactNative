import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';


const NuevaCitaModal = ({ modalVisible, setModalVisible, handleGuardarCita }) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleGuardar = () => {
    if ([paciente, propietario, email, telefono, sintomas].includes('')) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      paciente: paciente,
      propietario: propietario,
      email: email,
      telefono: telefono,
      sintomas: sintomas
    };

    handleGuardarCita(nuevoPaciente);

    //Para limpiar los campos
    setPaciente('');
    setPropietario('');
    setSintomas('')
    setTelefono('')
    setEmail('')
  };

  return (
    <Modal visible={modalVisible}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Nueva cita</Text>
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
        <TouchableOpacity style={styles.btnCancelar} onPress={() => setModalVisible(false)}>
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

export default NuevaCitaModal;
