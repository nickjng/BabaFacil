import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#94B9FF' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}
