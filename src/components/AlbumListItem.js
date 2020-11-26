import React from "react";
import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'

export function AlbumListItem({album, onPress}) {
    return <TouchableOpacity onPress={onPress}>
        <ListItem>
            <TextStyle>{album.title}</TextStyle>
        </ListItem>
    </TouchableOpacity>
}

const ListItem = styled.View` 
  padding: 10px;
  border: 1px solid #aaaaaa;
`;

const TextStyle = styled.Text` 
  color: #373737;
`;
