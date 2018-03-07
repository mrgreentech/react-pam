import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Loader, LoaderTypes, LoaderSize } from '../src/Components/Loader';

function LoaderDefault() {
  const loader = select('Loader', LoaderTypes, 'pulse');
  const size = select('Size', LoaderSize, '');
  return <Loader type={loader} size={size} />;
}

export { LoaderDefault };
