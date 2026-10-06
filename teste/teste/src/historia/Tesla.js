import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Tesla() {
  const historia = 
`Nikola Tesla foi um brilhante inventor, engenheiro eletricista e físico sérvio-americano que revolucionou o mundo moderno com suas contribuições fundamentais para o desenvolvimento dos sistemas de fornecimento de energia elétrica em corrente alternada. Nascido em 10 de julho de 1856 na aldeia de Smiljan, no Império Austro-Húngaro (atual Croácia), ele demonstrou uma inteligência fora do comum e uma memória fotográfica impressionante desde a infância. Filho de um sacerdote ortodoxo, Tesla estudou engenharia e física na Áustria e na República Tcheca antes de trabalhar com telefonia em Budapeste e Paris.

`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Tesla</Text>
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
    backgroundColor: '#d4a007',
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