import React, { useRef } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import BtnC from '../components/CustomButton'



export default function SignIn() {
    
    const navigation = useNavigation();
    const modalLoginRef = useRef(null)
    const modalRegisterRef = useRef(null)


    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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

                <Animatable.View delay={600} animation='fadeInUp' style={styles.bottonContainer} >
                    <BtnC
                        buttonText="Acessar"
                        btnColor='#94B9FF'
                        colorText='#FFF'
                        onPress={(event) => {
                            event.persist();
                            modalLoginRef.current?.open();
                        }}
                    />

                    <BtnC
                        buttonText='Cadastrar'
                        btnColor='#EBEBEB'
                        colorText='#9B9B9B'
                        onPress={(event) => {
                            event.persist();
                            modalRegisterRef.current?.open();
                        }}
                    // onPress={() => { modalRegisterRef.current?.open(); }}
                    />

                </Animatable.View>

                {/* modals */}
                <Modalize ref={modalLoginRef} snapPoint={600} modalHeight={600}>
                    <Text style={styles.titleModal}>
                        Login
                    </Text>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Email'
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.inputStyle}
                            placeholder='Senha'
                        />
                    </View>
                    <BtnC
                        buttonText='Acessar'
                        btnColor='#94B9FF'
                        colorText='#fff'
                        onPress={(event) => {
                            event.persist();
                            alert('acessar')
                        }}
                    />
                </Modalize>

                <Modalize ref={modalRegisterRef} snapPoint={300} modalHeight={300}>
                    <Text style={styles.titleModal}>
                        Cadastro
                    </Text>

                    <BtnC
                        buttonText='Pai/Responsável'
                        btnColor='#94B9FF'
                        colorText='#fff'
                        onPress={(event) => {
                            event.persist();
                            navigation.navigate('AccountCreation')
                        }}
                    />
                    <BtnC
                        buttonText='Babá'
                        btnColor='#FBCAFF'
                        colorText='#fff'
                        onPress={(event) => {
                            event.persist();
                            navigation.navigate('AccountCreation')
                        }}
                    />
                </Modalize>


            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerLogo: {
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
    bottonContainer: {
        flex: 1,
    },
    modalContent: {
        flex: 1,
        height: 180,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        width: '90%',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#247BBA',
        padding: 15,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleModal: {
        textAlign: 'center',
        margin: 25,
        fontFamily: 'OpenSans_400Regular',
        fontSize: 25,
        color: '#94B9FF',
    }

})