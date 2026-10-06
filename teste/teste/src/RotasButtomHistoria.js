import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Davinci from './personagens/Vinci';
import Einstein from './personagens/Albert';
import Kennedy  from './personagens/John';
import Newton  from './personagens/Isaac';
import Pele from './personagens/Pelee';
import Tesla from './personagens/Nikola';
import Historia from './pages/Historia';

const Stack = createStackNavigator();

export default function RotasButtomHistoria() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Historia" component={Historia} options = {{headerShown:false}} />
    <Stack.Screen name="Davinci" component={Davinci} options = {{title:"Davinci"}} />
    <Stack.Screen name="Einstein" component={Einstein} options = {{title:"Einstein"}} />
    <Stack.Screen name="Kennedy" component={Kennedy} options = {{title:"Kennedy"}} />
    <Stack.Screen name="Newton" component={Newton} options = {{title:"Newton"}} />
    <Stack.Screen name="Pele" component={Pele} options = {{title:"Pele"}} />
    <Stack.Screen name="Tesla" component={Tesla} options = {{title:"Tesla"}} />
    </Stack.Navigator>
  );
}
