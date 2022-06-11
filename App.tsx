/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Import Screen
import HomeScreen from './src/Screens/HomeScreen';
import SplashScreen from './src/Screens/SplashScreen';
import SignInScreen from './src/Screens/SignInScreen';
import LoginScreen from './src/Screens/LoginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [showSplashScreen, setShowSplashScree] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScree(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen && (
          <Stack.Screen name="Splash" component={SplashScreen} options = {{headerShown : false}} />
        )}
        <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown : false}}  />
        <Stack.Screen name="Register" component={SignInScreen} options ={{headerTitleAlign : 'center'}}  />
        <Stack.Screen name="Login" component={LoginScreen} options ={{headerTitleAlign : 'center'}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
