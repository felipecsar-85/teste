import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Albert() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Albert</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Einstein.jpg.jpg')}
     />
     </View>
     

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Einstein.jpg.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Einstein.jpg.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Albert Einstein nasceu em Ulm, na Alemanha, em 14 de março de 1879, em uma família judia. Quando criança, apresentou um desenvolvimento de fala um pouco tardio e demonstrava insatisfação com os métodos rígidos da escola tradicional, preferindo explorar matemática e física por conta própria. Mudou-se com a família para a Itália e depois para a Suíça, onde concluiu sua formação em matemática e física na Escola Politécnica de Zurique. Sem conseguir trabalho acadêmico de imediato, trabalhou como examinador no escritório de patentes em Berna, período em que aproveitou o tempo livre para aprofundar suas reflexões científicas.
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
  },
  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFC0CB',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    color: '#FFFFE0',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});