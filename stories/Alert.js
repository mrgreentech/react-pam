import React from 'react';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';
import Alert, { AlertTypes, AlertHeader } from '../src/Components/Alert';

function AlertDefault() {
  const Type = select('Type', AlertTypes, '');
  return (
    <Alert type={Type}>
      <AlertHeader>Title</AlertHeader>
      <p>Callout message</p>
    </Alert>
  );
}

export { AlertDefault };
