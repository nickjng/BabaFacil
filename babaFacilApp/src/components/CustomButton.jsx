import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const CustomButton = ({ onPress, btnColor,colorText,buttonText, additionalStyles }) => {

    
const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: btnColor,
        padding: 15,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        ...additionalStyles
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorText
      }

})
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};


export default CustomButton;