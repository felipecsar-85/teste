import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Historia(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Historia </Text>

      <FlatList
        data={historia}
        renderItem={({ item }) => (
          <View style={estilo.artista}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}>
              <Text style={estilo.txtArtista}> {item.nome}</Text>
            </TouchableOpacity>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'#F00'}
                />
                {item.like} Curtidas
              </Text>
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color={'blue'}
                />
                {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const historia = [
 
  {
    uid: 2,
    nome: 'Einstein',
    like: '381M',
    seguidores: '17,5M',
    buttom: 'Einstein',
  },
  {
    uid: 3,
    nome: 'Kennedy',
    like: '309M',
    seguidores: '43M',
    buttom: 'Kennedy',
  },
  {
    uid: 4,
    nome: 'Newton',
    like: '604M',
    seguidores: '32M',
    buttom: 'Newton',
  },
  {
     uid: 5,
    nome: 'Pele',
    like: '604M',
    seguidores: '32M',
    buttom: 'Pele',
  },
  {
    uid: 6,
    nome: 'Tesla',
    like: '604M',
    seguidores: '32M',
    buttom: 'Tesla', 
  }
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1f',
  },
  artista: {
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