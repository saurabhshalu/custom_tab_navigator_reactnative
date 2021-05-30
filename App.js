import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import TrendingScreen from './screens/TrendingScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import UserScreen from './screens/UserScreen';
import IconWithLabel from './components/IconWithLabel';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 80,
            borderRadius: 30,
            elevation: 8,
          },
        }}>
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                  focused={focused}
                  labelText="All"
                  iconName="apps-outline"
                  activeColor="#00adb5"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="TrendingScreen"
          component={TrendingScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                  focused={focused}
                  labelText="Trending"
                  iconName="trending-up-outline"
                  activeColor="#00adb5"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="FavouriteScreen"
          component={FavouriteScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                  focused={focused}
                  labelText="Favourite"
                  iconName="star-outline"
                  activeColor="#00adb5"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="USerScreen"
          component={UserScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                  focused={focused}
                  labelText="Me"
                  iconName="person-outline"
                  activeColor="#00adb5"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
