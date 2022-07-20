import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Add from './src/screens/Add';
import Today from './src/screens/Today';
import Upcoming from './src/screens/Upcoming';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {backgroundColor: '#AD40AF'},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Today') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Upcoming') {
              iconName = focused ? 'star' : 'star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: 'yellow',
        })}>
        <Tab.Screen
          name="Today"
          component={Today}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            headerShown: false,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
