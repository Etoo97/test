import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';
const Stack = createNativeStackNavigator();

function CartScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="CartScreen"component={CartScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
};
export default  CartScreenStack