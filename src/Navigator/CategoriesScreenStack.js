import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import HomeScreen from '../screens/HomeScreen';
import SubCategories from '../screens/SubCategories';
import SubCategoriesBakery from '../screens/SubCategoriesBakery';
import SubCategoriesCheese from '../screens/SubCategoriesCheese';
import SubCategoriesChicken from '../screens/SubCategoriesChicken';
import SubCategoriesColdCuts from '../screens/SubCategoriesColdCuts';
import SubCategoriesEggs from '../screens/SubCategoriesEggs';
import SubCategoriesForzenFood from '../screens/SubCategoriesForzenFood';
import SubCategoriesMeat from '../screens/SubCategoriesMeat';
import SubCategoriesSeafood from '../screens/SubCategoriesSeafood';
const Stack = createNativeStackNavigator();

function CategoriesScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategories" component={SubCategories} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesBakery" component={SubCategoriesBakery} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesCheese" component={SubCategoriesCheese} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesChicken" component={SubCategoriesChicken} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesColdCuts" component={SubCategoriesColdCuts} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesEggs" component={SubCategoriesEggs} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesForzenFood" component={SubCategoriesForzenFood} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesMeat" component={SubCategoriesMeat} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategoriesSeafood" component={SubCategoriesSeafood} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default CategoriesScreenStack