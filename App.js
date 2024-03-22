import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Auth/Login'

const App = () => {
  const Stack = createNativeStackNavigator();


  return (
   
              <NavigationContainer>
                <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="DateDistances" component={DateDistances} /> */}
        {/* zubi start */}
        <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
              </NavigationContainer>
             
  );
};

export default App;
