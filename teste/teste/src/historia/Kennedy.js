import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Kennedy() {
  const historia = 
`John F. Kennedy, o 35º presidente dos Estados Unidos, nasceu em uma influente e rica família de Massachusetts e teve uma trajetória marcada tanto pelo brilho político quanto por tragédias pessoais. Após se formar na Universidade de Harvard e servir com heroísmo na Marinha durante a Segunda Guerra Mundial, onde comandou o barco PT-109, Kennedy ingressou na carreira política como deputado e, posteriormente, senador pelo Partido Democrata. Sua ascensão culminou na histórica eleição presidencial de 1960, na qual derrotou Richard Nixon nos primeiros debates televisivos da história e se tornou o homem mais jovem e o primeiro católico a ser eleito para o cargo mais alto do país.

`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Kennedy</Text>
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