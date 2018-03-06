import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Loader, LoaderTypes } from '../src/Components/Loader';

function LoaderDefault() {
  const loader = select('Loader', LoaderTypes, 'pulse');
  return <Loader type={loader} />;
}

export { LoaderDefault };
