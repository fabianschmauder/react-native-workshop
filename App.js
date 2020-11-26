import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import {loadAlbums} from './src/service/album-service'
import {AlbumListItem} from "./src/components/AlbumListItem";

export default function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums().then(setAlbums)
  },[])

  return (
    <ScrollView>
      <StatusBar style="auto" hidden />
      {albums.map(album => <AlbumListItem key={album.id} album={album}/>)}
    </ScrollView>
  );
}


