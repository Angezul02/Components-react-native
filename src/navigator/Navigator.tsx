import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation1Screen from '../screens/Animation1Screen';
import Animation2Screen from '../screens/Animation2Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlideScreen from '../screens/SlideScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';


const Stack = createStackNavigator();

 const Navigator =()=> {

  const {theme} = useContext(ThemeContext)

  return (
    <NavigationContainer
    theme={theme}
    >

      <Stack.Navigator
      screenOptions={{
          headerShown: false,
          cardStyle:{
            // backgroundColor:"white"
          }
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation1Screen" component={Animation1Screen} />
        <Stack.Screen name="Animation2Screen" component={Animation2Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator