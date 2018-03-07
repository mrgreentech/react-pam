import React from 'react';
import AccountCircle from 'react-icons/lib/md/account-circle';
import Tile from '../src/Components/Tile';
import List, { ListItem } from '../src/Components/List';

function TileDefault() {
  return (
    <List>
      <ListItem>
        <Tile type={'left'} align={'top'}>
          <AccountCircle />
        </Tile>
        <Tile type={'content'}>
          <h1 pam-typography="body-2">Item content</h1>
          <p>Item content</p>
        </Tile>
      </ListItem>
    </List>
  );
}

export { TileDefault };
