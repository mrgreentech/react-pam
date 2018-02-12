import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';
import Alert, {Types, AlertHeader} from '../src/Components/Alert'

function AlertDefault() {
  const Type = select('Type', Types, '');
  return (
    <Alert type={Type}>
      <AlertHeader>Title</AlertHeader>
      <p>Callout message</p>
    </Alert>
  );
}

export {AlertDefault};