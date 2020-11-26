import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {  Text, View, ScrollView } from 'react-native';
import {loadAlbums} from './src/service/album-service'


export default function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums().then(setAlbums)
  },[])

  return (
    <ScrollView>
      <StatusBar style="auto" hidden />
      {albums.map(album => <View key={album.id}>
        <Text>{album.title}</Text>
      </View>)}
    </ScrollView>
  );
}


