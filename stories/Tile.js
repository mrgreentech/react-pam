import React from 'react';
import Block from 'react-icons/lib/md/block';
import Tile from '../src/Components/Tile';
import List, { ListItem } from '../src/Components/List';

function TileDefault() {
  return (
    <List>
      <ListItem>
        <Tile type={'left'} align={'top'}>
          <Block />
        </Tile>
        <Tile type={'content'}>
          <h1 pam-typography="body-2">Item content</h1>
        </Tile>
      </ListItem>
    </List>
  );
}

export { TileDefault };
