import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Pelee() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Pelee</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/pele.jpg')}
     />
     </View>
     

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/pele.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/pele.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Edson Arantes do Nascimento, conhecido mundialmente como Pelé, nasceu em Três Corações, Minas Gerais, em 23 de outubro de 1940. Filho de um ex-jogador chamado Dondinho, ele cresceu em uma família humilde e passou a infância em Bauru, no interior paulista, onde jogava futebol de rua com bolas improvisadas. O apelido veio de uma brincadeira de infância, quando ele pronunciava errado o nome do goleiro Bilé. Na adolescência, foi descoberto pelo ex-jogador Valdemar de Brito, que o levou para o Santos Futebol Clube em 1956. No Santos, Pelé transformou-se em um fenômeno histórico, conquistando inúmeros títulos paulistas, nacionais e internacionais ao longo de quase duas décadas dedicadas ao clube.
A consagração global veio muito cedo quando, com apenas 17 anos, disputou e venceu a Copa do Mundo de 1958 na Suécia, marcando gols decisivos na final e se tornando o jogador mais jovem a levantar a taça mundial. Esse foi o início de uma trajetória sem igual na Seleção Brasileira, onde ele também conquistou as Copas do Mundo de 1962 no Chile e de 1970 no México, tornando-se o único atleta da história a vencer três Copas como jogador. Em novembro de 1969, alcançou a marca histórica do seu milésimo gol jogando no Maracanã. Após encerrar sua longa passagem pelo futebol brasileiro nos anos 1970, mudou-se para os Estados Unidos para jogar no New York Cosmos, ajudando a popularizar o esporte no país antes de se aposentar definitivamente dos gramados em 1977.
Fora das quatro linhas, Pelé expandiu seu legado ao atuar como Ministro do Esporte do Brasil entre 1995 e 1998, período em que criou a chamada Lei Pelé, além de trabalhar como embaixador da ONU e da UNESCO para a educação e cultura, e se aventurar nas artes, na música e no cinema. O Rei do Futebol faleceu em 29 de dezembro de 2022, aos 82 anos, em São Paulo, devido à falência múltipla de órgãos decorrente de um câncer de cólon, deixando um legado eterno que consagrou o futebol brasileiro no mundo inteiro
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
    width: 360,
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