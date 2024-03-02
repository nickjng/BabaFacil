import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'

import * as Animatable from 'react-native-animatable'

import BtnC from '../components/CustomButton'



export default function SignIn() {

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.View animation='slideInDown' delay={600} style={styles.logoContent}>
                    <Image
                        source={require('../assets/imgs/logo.png')}
                        style={{ width: '40%', padding: 15 }}
                        resizeMode='contain'
                    />
                    <Text style={styles.logoText}>BabáFacíl</Text>
                </Animatable.View>
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.inputContainer} >
                <BtnC 
                    buttonText="Acessar"
                    btnColor='#94B9FF' 
                    colorText='#FFF' 
                    onPress={() => {alert ('Clicou em Acessar')}} 
                />

                <BtnC 
                    buttonText='Cadastrar' 
                    btnColor='#EBEBEB' 
                    colorText='#9B9B9B' 
                    onPress={() =>{alert('clicou em Cadastrar')}}
                />

            </Animatable.View>


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
        marginStart: '7%',
        marginBottom: '70%',
        flex: 2
    },
    logoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        marginLeft: -5,
        fontFamily: 'OpenSans_400Regular',
        fontSize: 40,
        color: '#878787',
        // fontWeight: 'bold',
    },
    inputContainer: {
        flex: 1,
    }

})