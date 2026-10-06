import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Vinci() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Vinci</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Davinci.jpg.jpg')}
     />
     </View>
     

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Davinci.jpg.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Davinci.jpg.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Leonardo da Vinci nasceu em 15 de abril de 1452 na pequena aldeia de Vinci, próxima a Florença, na Itália, sendo filho ilegítimo do tabelião Piero da Vinci e da camponesa Caterina. Desde a infância, demonstrou grande talento para o desenho e uma curiosidade insaciável pela natureza. Na juventude, foi levado para Florença para trabalhar como aprendiz no prestigiado atelier do pintor e escultor Andrea del Verrocchio, onde aprendeu técnicas de pintura, escultura e mecânica. Rapidamente se destacou e passou a dominar a harmonia entre arte e ciência, acreditando que a observação rigorosa do mundo era indispensável para a criação artística.
Durante sua trajetória, Leonardo viveu e trabalhou em importantes centros culturais italianos, como Milão, onde prestou serviços ao duque Ludovico Sforza, criando obras monumentais e estudos aprofundados. Foi nesse período milanês que pintou o famoso mural A Última Ceia entre 1495 e 1499. Além da carreira artística, ele se dedicou intensamente à engenharia, à anatomia — realizando dissecções para compreender a estrutura de músculos e ossos —, e à invenção de máquinas revolucionárias, como protótipos de engenhos voadores e paraquedas, documentados em seus famosos cadernos de escrita espelhada.
No início do século XVI, produziu sua obra mais célebre e enigmática, a Mona Lisa, aplicando com maestria a técnica do sfumato. O artista passou seus últimos anos na França, após aceitar o convite do rei Francisco I para atuar como primeiro pintor, engenheiro e arquiteto real. Leonardo da Vinci faleceu em 2 de maio de 1519, aos 67 anos, no Château du Clos Lucé, em Amboise, deixando um legado inestimável que o consagrou como o maior símbolo do Renascimento e o arquétipo do homem universal
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