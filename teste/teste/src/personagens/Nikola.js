import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Nikola() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Nikola</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Tesla_circa_1890.jpeg')}
     />
     </View>
     

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Tesla_circa_1890.jpeg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Tesla_circa_1890.jpeg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Nikola Tesla foi um brilhante inventor, engenheiro eletricista e físico que revolucionou o mundo moderno com suas contribuições cruciais para o desenvolvimento do sistema de fornecimento de eletricidade em corrente alternada. Nascido em 10 de julho de 1856, na aldeia de Smiljan, no Império Austro-Húngaro (atual Croácia), ele demonstrou desde a infância uma inteligência fora do comum, possuindo uma memória fotográfica impressionante e a capacidade de realizar cálculos complexos de cabeça. Filho de um sacerdote ortodoxo, Tesla estudou engenharia e física na Áustria e na República Tcheca, ganhando experiência prática inicial em telefonia em Budapeste e Paris.
Em 1884, Tesla mudou-se para os Estados Unidos com pouco dinheiro e foi contratado para trabalhar na empresa de Thomas Edison. A parceria durou pouco devido a divergências científicas e comerciais sobre o uso de eletricidade, dando início à famosa "Guerra das Correntes". Enquanto Edison defendia a corrente contínua, Tesla provou a superioridade da corrente alternada, que permitia transmitir energia por longas distâncias com muito mais eficiência. O empresário George Westinghouse comprou e licenciou as patentes do motor de indução e do sistema polifásico de Tesla, consolidando a corrente alternada e viabilizando a construção da primeira grande usina hidrelétrica moderna nas Cataratas do Niágara.
Na maturidade, Tesla dedicou-se a projetos audaciosos e visionários sobre a transmissão de energia e comunicação sem fio, criando a famosa bobina de Tesla, conceitos pioneiros de rádio, controle remoto e iluminação fluorescente. No entanto, ideias grandiosas como a Torre Wardenclyffe falharam em obter sucesso financeiro duradouro, resultando em grave escassez de recursos na vida do inventor. Nos últimos anos de vida, excêntrico e recluso, Tesla morava em hotéis em Nova York, onde passava o tempo alimentando pombos. Ele faleceu sozinho e falido em 7 de janeiro de 1943, mas seu legado científico monumental foi amplamente reconhecido e reavaliado décadas depois, transformando-o em um dos maiores ícones da história da ciência.
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