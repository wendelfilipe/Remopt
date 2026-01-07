/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StacksRoute from './src/routes/stack.route';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {

  return (
    <NavigationContainer>
      <StacksRoute></StacksRoute>
    </NavigationContainer>
      
  );
}

export default App;
