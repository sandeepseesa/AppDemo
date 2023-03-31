import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import MenuDetailsScreen from './screens/MenuDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MenuDetails" component={MenuDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
