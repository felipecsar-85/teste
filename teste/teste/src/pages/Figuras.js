import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Figuras(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Figuras Historicas</Text>

      <FlatList
      data={figuras}

      renderItem={({ item }) =>
      <View style={estilo.figuras}>         
      <TouchableOpacity
       onPress={() => {
       props.navigation.navigate(item.buttom);  }}>
       <Text style={estilo.txtArtista}> {item.nome}</Text>
      </TouchableOpacity>

        <View style={estilo.rede}>
          <Text style={estilo.curtidas}>
          <MaterialCommunityIcons
            name="thumb-up"
            size={20}
            color={'red'}
            />
            {item.like} Curtidas
            </Text>
            <Text style={estilo.reproducoes}>
            <MaterialCommunityIcons
            name="headphones"       
            size={20}
            color={'blue'}
            />
            {item.reproducoes} Reproduções
            </Text>
          </View>
        </View>
      }
    />
    </View>
  );
}

const figuras = [
  
  {
    uid: 2,
    nome: 'Einstein',
    like: "2,7M",
    reproducoes: "3,2B",
     buttom:'Einstein',
  },
    {
    uid: 3,
    nome: 'Kennedy',
    like: "1,9M",
    reproducoes: "1,3B",
     buttom:'Kennedy',
  },
    {
    uid: 4,
    nome: 'Newton',
    like: "3,5M",
    reproducoes: "2,9B",
    buttom:'Newton',
  },
  {
    uid: 5,
    nome: 'Pele',
    like: "3,5M",
    reproducoes: "2,9B",
    buttom:'Pele',
  },
  {
    uid: 6,
    nome: 'Tesla',
    like: "3,5M",
    reproducoes: "2,9B",
    buttom:'Tesla',
  },
];

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1a1b1f',
  },
  figuras: {
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtArtista: {
    fontSize: 20,
  },
});