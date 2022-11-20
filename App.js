import * as React from 'react';
import Tabs from './src/Navigator/tab';
import { NavigationContainer } from '@react-navigation/native';
import LandingPageStack from './src/Navigator/LandingPageStack';
const App = () => {
  return (
    <NavigationContainer>
    <LandingPageStack />
    </NavigationContainer>
  );
}

  export default App ;