import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, Image, ScrollView  } from 'react-native';
import NuevaCitaModal from './componentes/NuevaCita';
import Paciente from './componentes/Paciente';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  const handlePressNuevaCita = () => {
    setModalVisible(true);
  };

  const handleGuardarCita = (nuevoPaciente) => {
    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(false);
  };

  const handleEliminarCita = (id) => {
    const updatedPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(updatedPacientes);
  };

  const handleEditarCita = (pacienteEditado) => {
    // Aquí puedes implementar la lógica para editar la cita
    console.log('Editar cita', pacienteEditado);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
      <Image source={require('./img/mascota.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.titulo}>Administración de citas</Text>
      <Text style={styles.subtitulo}>Veterinaria</Text>

      <Pressable
        onPress={handlePressNuevaCita}
        style={[styles.btnNuevaCita, styles.btnTextNuevaCita]}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>

      <NuevaCitaModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleGuardarCita={handleGuardarCita}
      />

      {pacientes.map((paciente) => (
        <Paciente key={paciente.id}
        item={paciente}
        handleEliminarCita={handleEliminarCita}
        handleEditarCita={handleEditarCita}
         />
      ))}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 100,
    marginTop: 90,
    marginBottom: 90,
  },
  titulo: {
    fontSize: 25,
    color: '#17272c',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  subtitulo: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    margin: 20,
  },
  btnNuevaCita: {
    backgroundColor: '#666a7c',
    paddingVertical: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 12,
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#f9f9f9',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default App;
