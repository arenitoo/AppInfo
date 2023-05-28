import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Film"
        component={Film}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Game"
        component={Game}
      />
    </Stack.Navigator>
  )
}