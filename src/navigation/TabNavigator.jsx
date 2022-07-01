import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../Screens/SearchScreen';
import HomeStack from './HomeStack';
import { tabBarIcons } from './tabBarIcons';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => tabBarIcons({ focused, color, size, route }),
        tabBarActiveTintColor: theme.navbar.activeIcon,
        tabBarInactiveTintColor: theme.navbar.inactiveIcon,
        headerTintColor: 'blue',
        tabBarStyle: { backgroundColor: theme.navbar.bg },
      })}>
      <Tab.Screen name='Home' component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name='Search' component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name='GitHub' component={SearchScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
