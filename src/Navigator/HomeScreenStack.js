import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import SubCategories from '../screens/SubCategories';
import Notifications from '../screens/Notifications'
import SubCategoriesBakery from '../screens/SubCategoriesBakery';
import SubCategoriesCheese from '../screens/SubCategoriesCheese';
import SubCategoriesChicken from '../screens/SubCategoriesChicken';
import SubCategoriesColdCuts from '../screens/SubCategoriesColdCuts';
import SubCategoriesEggs from '../screens/SubCategoriesEggs';
import SubCategoriesForzenFood from '../screens/SubCategoriesForzenFood';
import SubCategoriesMeat from '../screens/SubCategoriesMeat';
import SubCategoriesSeafood from '../screens/SubCategoriesSeafood';
import AddCard from '../screens/AddCard';
const Stack = createNativeStackNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategories" component={SubCategories} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesBakery" component={SubCategoriesBakery} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesCheese" component={SubCategoriesCheese} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesChicken" component={SubCategoriesChicken} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesColdCuts" component={SubCategoriesColdCuts} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesEggs" component={SubCategoriesEggs} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesForzenFood" component={SubCategoriesForzenFood} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesMeat" component={SubCategoriesMeat} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesSeafood" component={SubCategoriesSeafood} options={{ headerShown: false }} />
      <Stack.Screen name="AddCard" component={AddCard} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default HomeScreenStack