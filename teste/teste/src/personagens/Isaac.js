import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Isaac() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Isaac</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Newton.jpg.jpg')}
     />
     </View>
     

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Newton.jpg.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/Newton.jpg.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Isaac Newton foi um físico, matemático, astrônomo e teólogo inglês nascido em 4 de janeiro de 1643 na aldeia de Woolsthorpe, na Inglaterra, e falecido em 20 de março de 1727, em Londres. Ele é considerado um dos cientistas mais influentes da história da humanidade por ter transformado a nossa compreensão do universo.
Newton nasceu prematuro e perdeu o pai poucos meses antes de vir ao mundo. Na juventude, ingressou na Universidade de Cambridge em 1661, onde se formou e posteriormente se tornou professor. Durante um período de isolamento em sua terra natal entre 1665 e 1666, motivado pela peste que fechou a universidade, ele viveu o momento mais criativo de sua vida. Nesses anos, começou a delinear os fundamentos do cálculo infinitesimal, estudou a decomposição da luz por prismas e formulou as bases das ideias que revolucionariam a física
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