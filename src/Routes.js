import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Index from './views/Index';
import Login from './views/Login';
import Alimento from './views/Alimento';
import Pagamento from './views/Pagamento';


import { NavigationContainer } from '@react-navigation/native';


const Stack=createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Index' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Alimento" component={Alimento} />
          <Stack.Screen name="Pagamento" component={Pagamento} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }