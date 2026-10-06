import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pele() {
  const historia = 
`Edson Arantes do Nascimento, conhecido mundialmente como Pelé, nasceu na cidade mineira de Três Corações em 23 de outubro de 1940 e tornou-se o maior ícone da história do futebol. Filho de um ex-jogador chamado Dondinho, ele passou a infância em Bauru, no interior paulista, onde jogava futebol de rua e ganhou o famoso apelido. O talento precoce chamou a atenção do Santos Futebol Clube, equipe para a qual se mudou em 1956 para iniciar sua carreira profissional que duraria quase duas décadas

`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Pele</Text>
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