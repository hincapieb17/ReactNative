import React from 'react';
import {View, Text, Modal, TextInput, StyleSheet} from 'react-native';

const NuevaCitaModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal visible={modalVisible}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Nueva cita</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre paciente"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre propietario"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Email propietario"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono propietario"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={[styles.input, styles.inputSintomas]}
          placeholder="Síntomas"
          placeholderTextColor="#aaa"
          multiline={true}
        />
        <Text
          style={[styles.btnGuardar, styles.btnTextGuardar]}
          onPress={() => setModalVisible(false)}>
          Guardar
        </Text>
        <Text
          style={[styles.btnCancelar, styles.btnTextCancelar]}
          onPress={() => setModalVisible(false)}>
          Cancelar
        </Text>
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
