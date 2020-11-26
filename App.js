import React from 'react';
import 'react-native-gesture-handler';
import {AlbumsScreen} from "./src/screens/AlbumsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TodoScreen} from "./src/screens/TodoScreen";
const Tab = createBottomTabNavigator();

export default function App() {

    return (<NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Albums" component={AlbumsScreen} />
                <Tab.Screen name="Todos" component={TodoScreen} />
            </Tab.Navigator>
    </NavigationContainer>);
}


