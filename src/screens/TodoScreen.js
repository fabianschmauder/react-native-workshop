import React from "react";
import {View, Text} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function TodoScreen() {
    return <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeTodoScreen} />
    <Tab.Screen name="Settings" component={SettingsTodoScreen} />
</Tab.Navigator>
}


const HomeTodoScreen = () => {
    return <View>
        <Text>Hallo Home</Text>
    </View>
}
const SettingsTodoScreen = () => {
    return <View>
        <Text>Hallo Settings</Text>
    </View>
}
