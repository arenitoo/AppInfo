import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';
import Sobre from './screens/sobre';
import More from './screens/more';
import Contato from './screens/contato';
import game from './screens/game';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6338d5', 
        tabBarInactiveTintColor: '#453a40', 
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0d0c0c',
          position: 'absolute',
          bottom: 5,
          margin: 10,
          borderRadius: 16,
          borderTopWidth: 0,
          elevation: 0,
        }
      })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="home" size={size} color={color}
               />
            }
          }}
        />
        <Tab.Screen
          name='sobre'
          component={Sobre}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="film" size={size} color={color} />
            }
          }}
        />
        <Tab.Screen
          name='More'
          component={More}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="user-graduate" size={size} color={color} />
            }
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="instagram" size={size} color={color} />
            }
          }}
          
        />
 <Tab.Screen
          name='Game'
          component={game}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="gamepad" size={size} color={color} />
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
 }

