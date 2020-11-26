import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {loadAlbums} from './src/service/album-service'


export default function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums().then(setAlbums)
  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      {albums.map(album => <View key={album.id}>
        <Text>{album.title}</Text>
      </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
