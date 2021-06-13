import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/Routes';

export default function App(){
  
  return(
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes/>
    </>
   );
}
