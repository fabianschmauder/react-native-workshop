import React from "react";
import styled from 'styled-components/native'

export function AlbumListItem({album}) {
    return <ListItem>
        <TextStyle>{album.title}</TextStyle>
    </ListItem>
}

const ListItem = styled.View` 
  padding: 10px;
  border: 1px solid #aaaaaa;
`;

const TextStyle = styled.Text` 
  color: #373737;
`;
