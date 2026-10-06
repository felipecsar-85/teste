import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home(props) {
  return (
    <View style={estilo.container}>
    <ImageBackground style={estilo.fundoimg} resizeMode="streth" source={require('../../assets/pexels-asumaani-17543467.jpg')}>
    <Text style={estilo.titulo}>Curiosidades De Figuras Historicas </Text>
    </ImageBackground>
    </View>
  );
}
const estilo = StyleSheet.create({
  container:{
    flex:1,
  },
  fundoimg:{
    flex:1,
    justifyContent: 'center'
  },
  titulo:{
    shadowColor: '#FFFFFF',
    fontSize: 50,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 700,
  }
})