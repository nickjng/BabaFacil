import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AccountCreation() {
  return (
    <View styles={styles.title}>
      <Text>Tela de cadastro</Text>
    </View>
  )
}

const styles = StyleSheet.create({


    title:{
        color: 'black'
    }
})