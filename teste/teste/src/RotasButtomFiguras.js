import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Davinci from './historia/Davinci';
import Einstein from './historia/Einstein';
import Kennedy from './historia/Kennedy';
import Newton from './historia/Newton';
import Pele from './historia/Pele';
import Tesla from './historia/Tesla';
import Figuras  from './pages/Figuras';

const Stack = createStackNavigator();

export default function RotasButtomFiguras() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Figuras" component={Figuras} options = {{headerShown:false}} />
    <Stack.Screen name="Davinci" component={Davinci} options = {{title:"Davinci"}} />
    <Stack.Screen name="Einstein" component={Einstein} options = {{title:"Einstein"}} />
    <Stack.Screen name="Kennedy" component={Kennedy} options = {{title:"Kennedy"}} />
    <Stack.Screen name="Newton" component={Newton} options = {{title:"Newton"}} />
    <Stack.Screen name="Pele" component={Pele} options = {{title:"Pele"}} />
    <Stack.Screen name="Tesla" component={Tesla} options = {{title:"Tesla"}} />
    </Stack.Navigator>
  );
}