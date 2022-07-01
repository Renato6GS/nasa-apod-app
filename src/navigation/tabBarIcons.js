import Ionicons from 'react-native-vector-icons/Ionicons';

export const tabBarIcons = ({ focused, color, size, route }) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'home-sharp' : 'home-outline';
  } else if (route.name === 'Search') {
    iconName = focused ? 'search' : 'search-outline';
  } else if (route.name === 'GitHub') {
    iconName = 'logo-github';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};
