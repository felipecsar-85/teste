import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Figuras from './RotasButtomFiguras';
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Historia from './RotasButtomHistoria';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Tab.Screen
    name="Figuras"
    component={Figuras}
    options = {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="account" color={color} size={size}/>}}
      />
          <Tab.Screen
    name="Home"
    component={Home}
    options = {{
      tabBarLabel: "Home",
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>}}
      />
          <Tab.Screen
    name="Historia"
    component={Historia}
    options = {{
      tabBarLabel: "Historia",
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="video" color={color} size={size}/>}}
      />
      <Tab.Screen
    name="Sobre"
    component={Sobre}
    options = {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="information" color={color} size={size}/>}}
      />
      </Tab.Navigator>
      
  );
}