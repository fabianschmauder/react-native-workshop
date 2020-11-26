import React, {useEffect, useState} from "react";
import {loadAlbums} from "../service/album-service";
import {ScrollView} from "react-native";
import {StatusBar} from "expo-status-bar";
import {AlbumListItem} from "../components/AlbumListItem";


export function AlbumsScreen() {
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
