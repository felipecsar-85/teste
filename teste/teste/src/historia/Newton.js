import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Newton() {
  const historia = 
`Isaac Newton nasceu prematuro na Inglaterra em 4 de janeiro de 1643, três meses após a morte de seu pai, e cresceu sob os cuidados da avó após sua mãe se casar novamente. Ele ingressou no Trinity College da Universidade de Cambridge em 1661 e, durante o fechamento da universidade devido à Peste Bubônica entre 1665 e 1666, teve seu período mais criativo na fazenda da família. Nessa época de isolamento, ele desenvolveu as bases do cálculo diferencial e integral, estudou a decomposição da luz por prismas, construiu o primeiro telescópio refletor funcional e concebeu as ideias iniciais sobre a gravitação universal e as leis do movimento

`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Newton</Text>
        <Text style={estilo.subtitulo}>
       
        </Text>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            {historia}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3a007',
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFC0CB',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    color: '#E6E6FA',
    marginBottom: 20,
  },
  resumo: {
    marginHorizontal: 25,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 12,
  },
  textoResumo: {
    fontSize: 16,
    lineHeight: 27,
    color: '#FFFFE0',
  },
});