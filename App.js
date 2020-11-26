import React from 'react';
import 'react-native-gesture-handler';
import {AlbumsScreen} from "./src/screens/AlbumsScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodoScreen} from "./src/screens/TodoScreen";

const Tab = createBottomTabNavigator();
import {createStackNavigator} from '@react-navigation/stack';
import {AlbumScreen} from "./src/screens/AlbumScreen";

const Stack = createStackNavigator();

export default function App() {

    return (<NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Albums" component={AlbumTab}/>
            <Tab.Screen name="Todos" component={TodoScreen}/>
        </Tab.Navigator>
    </NavigationContainer>);
}

const AlbumTab = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Albums" component={AlbumsScreen}/>
        <Stack.Screen name="Album" component={AlbumScreen}/>
    </Stack.Navigator>
}


