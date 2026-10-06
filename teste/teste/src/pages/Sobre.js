import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Dragonball() {
  const figuras = 
`O objetivo desse app é listar alguns dos mais clássicos personagens de animes em um só lugar. Nesse app podemos também ver informações a mais sobre tais personagens, como um pequeno resumo de sua essência, sua personalidade, objetivos e desafios. O app também contêm uma aba de animes, onde se localiza os animais de cada um dos personagens.

Tecnologias Utilizadas:

Componentes visuais (View, Text, Image e ScrollView)
Navegação com Bottom Tab Navigator
Navegação com Stack Navigator
Uso de FlatList
Estilização com StyleSheet
Navegação entre telas
Organização do projeto em pastas e componentes
`;

  return (
    <ScrollView>
   
      <View style={estilo.container}>
              <Text style={estilo.titulo}>Sobre</Text>
        <Text style={estilo.titulo}>Sobre o Projeto</Text>
        <Text style={estilo.subtitulo}>
        Feito por:
        </Text>
                <Text style={estilo.subtitulo}>
         Felipe Cesar
        </Text>

                <Text style={estilo.titulo}>Objetivo e tecnologias utilizadas:</Text>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            {figuras}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1f',
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#8c8c8c',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    color: '#d4af37',
    marginBottom: 20,
  },
  resumo: {
    marginHorizontal: 25,
    backgroundColor: '#8c8c8c',
    borderRadius: 7,
    padding: 12,
  },
  textoResumo: {
    fontSize: 16,
    lineHeight: 27,
    color: '#d4af37',
  },
});