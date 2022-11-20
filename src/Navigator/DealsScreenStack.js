import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DealsScreen from '../screens/DealsScreen';
const Stack = createNativeStackNavigator();

function DealsScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DealsScreen"component={DealsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
};
export default  DealsScreenStack