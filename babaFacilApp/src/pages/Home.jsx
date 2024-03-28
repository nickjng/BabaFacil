import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MenuBar from '../components/MenuBar'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <MenuBar TelaAtiva={'home'} />
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

})