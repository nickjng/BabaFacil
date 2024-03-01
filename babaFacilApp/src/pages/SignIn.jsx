import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native'

import BtnC from '../components/CustomButton'



export default function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../assets/imgs/logoFull.png')}
                    style={{ width: '70%', padding: 15 }}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.inputContainer}>
                <BtnC 
                    buttonText="Acessar"
                    btnColor='#247BBA' 
                    colorText='#FFF' 
                    onPress={() => {alert ('Clicou em Acessar')}} 
                />

                <BtnC 
                    buttonText='Cadastrar' 
                    btnColor='#EBEBEB' 
                    colorText='#9B9B9B' 
                    onPress={() =>{alert('clicou em Cadastrar')}}
                />
                
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerLogo:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '70%',
        flex: 2
    },
    inputContainer: {
        flex: 1,
    }

})