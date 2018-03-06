import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Visibility, VisibilityTypes } from '../src/Components/Visibility';

function VisibilityDefault() {
  const visibility = select('Visibility', VisibilityTypes, '');
  return (
    <ol>
      <li>First item</li>
      <Visibility component={'li'} visibility={visibility}>
        Second item
      </Visibility>
      <li>Third item</li>
    </ol>
  );
}

export { VisibilityDefault };
