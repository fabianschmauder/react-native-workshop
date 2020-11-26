import React from "react";
import {View, Text} from "react-native";

export function AlbumScreen({route}) {
    return <View>
        <Text> Album {route.params.id}</Text>
    </View>
}
