import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { Ionicons } from '@expo/vector-icons';
import BtnC from '../components/CustomButton'

export default function AccountCreation() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.return} onPress={() => { navigation.navigate('SignIn') }}>
        <Ionicons name="arrow-back" size={33} color="black" />
        <Text style={{ fontSize: 17 }}> Voltar</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <TextInput style={styles.inputStyle} placeholder='Nome' />
        <TextInput style={styles.inputStyle} placeholder='Sobrenome' />
        <TextInput style={styles.inputStyle} placeholder='Data de Nascimento' keyboardType='number-pad' />
        <TextInput style={styles.inputStyle} placeholder='CPF' keyboardType='number-pad' />
        <TextInput style={styles.inputStyle} placeholder='Email' keyboardType='email-address' />
        <TextInput style={styles.inputStyle} placeholder='Senha' secureTextEntry/>
        <TextInput style={styles.inputStyle} placeholder='Confirmar Senha' secureTextEntry />
        <BtnC
          additionalStyles={{ margin: 20, padding: 10, left: -17, width: '100%' }}
          buttonText='Cadastrar'
          btnColor='#94B9FF'
          colorText='#FFF'
          onPress={() => { navigation.navigate('Home') }}
        // onPress={() => { modalRegisterRef.current?.open(); }}
        />
      </View>
      <View style={styles.containerLogo}>
        <View style={styles.logoContent}>
          <Image
            source={require('../assets/imgs/logo.png')}
            style={{ width: '20%', padding: 5 }}
            resizeMode='contain'
          />
          <Text style={styles.logoText}>BabáFacíl</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  return: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 56
  },
  form: {
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    padding: 15,
    margin: 15,
  },
  inputStyle: {
    width: '100%',
    left: -17,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#247BBA',
    padding: 10,
    margin: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  logoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: 2,
    fontFamily: 'OpenSans_400Regular',
    fontSize: 28,
    color: '#878787',
    // fontWeight: 'bold',
},


})