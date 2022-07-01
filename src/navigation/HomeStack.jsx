import React from 'react';
import Main from '../components/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultScreen from '../Screens/ResultScreen';

const HomeStackNative = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <HomeStackNative.Navigator>
      <HomeStackNative.Screen name='Main' component={Main} options={{ title: 'Home Stack sd', headerShown: false }} />
      <HomeStackNative.Screen name='Result' component={ResultScreen} options={{ title: 'Day' }} />
    </HomeStackNative.Navigator>
  );
}
