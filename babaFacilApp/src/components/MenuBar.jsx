import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const MenuBar = ({ TelaAtiva }) => {

    const styles = StyleSheet.create({
        menu: {
            position: 'absolute',
            bottom: -10,
            left: -3,
            right: 0,
            flexDirection: 'row',
            width: "102%",
            height: 80,
            borderWidth: 3,
            borderRadius: 17,
            borderColor: '#C8C8C8',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.menu}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <FontAwesome name="home" size={23} color={TelaAtiva == 'home' ? '#0EA7FD' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }}>
                <FontAwesome name="list-ul" size={23} color={TelaAtiva == 'atividade' ? '#0EA7FD' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Atividade</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }}>
                <FontAwesome name="wechat" size={23} color={TelaAtiva == 'chat' ? '#0EA7FD' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }}>
                <FontAwesome name="user" size={23} color={TelaAtiva == 'config' ? '#0EA7FD' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Config</Text>
            </TouchableOpacity>

        </View>
    );

};

export default MenuBar;
