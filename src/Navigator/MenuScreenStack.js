import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/MenuScreen';
import SavedItems from '../screens/SavedItems';
import CustomerServices from '../screens/CustomerServices';
import Order from '../screens/Order';
import MissingorIncorrectitem from '../screens/MissingorIncorrectitem';
import IssuewithDeliveryrider from '../screens/IssuewithDeliveryrider';
import OtherIssueorFeedback from '../screens/OtherIssueorFeedback';
const Stack = createNativeStackNavigator();

function MenuScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SavedItems" component={SavedItems} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerServices" component={CustomerServices} options={{ headerShown: false }} />
      <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
      <Stack.Screen name="MissingorIncorrectitem" component={MissingorIncorrectitem} options={{ headerShown: false }} />
      <Stack.Screen name="IssuewithDeliveryrider" component={IssuewithDeliveryrider} options={{ headerShown: false }} />
      <Stack.Screen name="OtherIssueorFeedback" component={OtherIssueorFeedback} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default MenuScreenStack