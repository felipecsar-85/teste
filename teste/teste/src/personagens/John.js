import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function John() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> John</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/JohnKennedy.jpg')}
     />
     </View>
     

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/JohnKennedy.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/JohnKennedy.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
John Fitzgerald Kennedy nasceu em 29 de maio de 1917, em Brookline, no estado de Massachusetts, em uma família rica, influente e de forte tradição católica e política. Apesar da infância privilegiada, ele enfrentou diversos problemas de saúde ao longo dos anos. Formou-se pela Universidade de Harvard em 1940 e, com a chegada da Segunda Guerra Mundial, alistou-se na Marinha dos Estados Unidos. Ele comandou um barco de patrulha no Pacífico e tornou-se um herói de guerra após salvar seus companheiros de tripulação após o naufrágio de sua embarcação, embora tenha sofrido graves ferimentos nas costas que o acompanhariam pelo resto da vida.
Após uma breve atuação como jornalista, Kennedy iniciou sua carreira política pelo Partido Democrata, sendo eleito deputado federal em 1946 e reeleito nos anos seguintes. Em 1952, conquistou uma vaga no Senado dos Estados Unidos representando Massachusetts. No ano seguinte, casou-se com Jacqueline Bouvier, com quem teve filhos. Durante seu período no Senado, escreveu o livro "Perfis de Coragem", que lhe rendeu um prêmio Pulitzer.
Em 1960, Kennedy concorreu à presidência dos Estados Unidos. Com uma campanha carismática e o apelo por renovação através do programa "A Nova Fronteira", ele derrotou o republicano Richard Nixon e tomou posse em 20 de janeiro de 1961. Aos 43 anos, tornou-se a pessoa mais jovem eleita para o cargo e o primeiro presidente católico da história americana. Seu governo coincidiu com o período mais tenso da Guerra Fria, marcando sua gestão com episódios internacionais críticos como a fracassada invasão da Baía dos Porcos em 1961, a construção do Muro de Berlim e, principalmente, a Crise dos Mísseis de Cuba em 1962, quando negociou diretamente com a União Soviética para evitar um confronto nuclear global. Ele também apoiou os direitos civis, incentivou a corrida espacial com o objetivo de levar o homem à Lua e criou iniciativas humanitárias como o Corpo da Paz.
A trajetória de John F. Kennedy foi tragicamente interrompida em 22 de novembro de 1963, quando foi assassinado a tiros durante um desfile presidencial em carro aberto em Dallas, no Texas. Sua morte chocou o mundo e transformou sua imagem em um símbolo de carisma, juventude e esperança na política do século XX.
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