/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
//import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

import NuevaCitaModal from './componentes/NuevaCita';

function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  const handlePressNuevaCita = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.contenedor}>

      <Image
        source={require('./img/mascota.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Administración de citas {''}</Text>
      <Text style={styles.subtitulo}>Veterinaria</Text>

      <Pressable onPress={handlePressNuevaCita} style={[styles.btnNuevaCita, styles.btnTextNuevaCita]}>
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>
      <NuevaCitaModal  modalVisible={modalVisible} setModalVisible={setModalVisible} />


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
    height: 200,
    marginTop: 90,
    marginBottom: 90,
  },
  titulo: {
    fontSize: 36,
    color: '#17272c',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  subtitulo: {
    fontSize: 28,
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
  }
});

export default App;
