import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Add from './src/screens/Add';
import Today from './src/screens/Today';
import Upcoming from './src/screens/Upcoming';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerTitle: 'BirthdayApp'}}>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Upcoming" component={Upcoming} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
