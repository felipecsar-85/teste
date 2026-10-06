import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Einstein() {
  const historia = 
`Albert Einstein nasceu em Ulm, na Alemanha, no dia 14 de março de 1879, em uma família judia. Desde a infância, demonstrou grande curiosidade pelo funcionamento do universo, fascinando-se por matemática e física de forma autodidata. Na juventude, mudou-se com a família para a Itália e depois para a Suíça, onde renunciou temporariamente à cidadania alemã e concluiu seus estudos superiores na Escola Politécnica de Zurique em 1900. Como teve dificuldades para conseguir uma vaga de professor logo após a graduação, trabalhou como examinador no escritório de patentes na cidade de Berna.
`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Einstein</Text>
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