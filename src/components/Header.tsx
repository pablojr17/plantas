import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import colors from '../styles/colors';

import userImg from '../assets/user.png';
import fonts from '../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

export function Header() {
  const [userName, setUserName] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    "Mantenha as plantas ao alcance dos olhos!",
    "Não deixe a terra exposta.",
    "Tenha o número de vasos que você consegue dar conta.",
    "Lembre-se de adubar suas plantinhas.",
    "Toque a terra com a pontinha do dedo antes de molhar.",
    "Não precisa comprar um monte de ferramenta na jardinagem.",
    "Teste vários tipos de substratos.",
    "Pesquise mais sobre suas plantas, para um melhor resultado.",
    "Remova as folhas danificadas.",
    "Lembre-se, agua na medida certa."
  ];

  const i = Math.floor(Math.random() * data.length);

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')

      setUserName(user || '')
    }

    loadStorageUserName();
  }, [])

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{data[i]}</Text>

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Ok!</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <TouchableHighlight style={styles.openButton} activeOpacity={0.7} onPress={() => setModalVisible(true)}>
        {/* <Feather name="info" style={styles.buttonIcon} /> */}
        <Text style={styles.textStyle}>Dicas!</Text>
      </TouchableHighlight>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.green,
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
})