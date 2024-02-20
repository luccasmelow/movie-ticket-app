import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Details } from '../screens/Details';
import { Ticket } from '../screens/Ticket';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ticket" component={Ticket}  options={{
            headerShown: false, 
          }}/>
        <Stack.Screen name="details" component={Details} options={{
            headerShown: false, 
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
