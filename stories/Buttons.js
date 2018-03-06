import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';
import Button, {
  ButtonColors,
  ButtonStates,
  ButtonSizes,
  ButtonVariations
} from '../src/Components/Button';
import ButtonGroup from '../src/Components/Button/ButtonGroup';

function ButtonDefault() {
  const Label = text('Label', 'My button');
  const Color = select('Color', ButtonColors, '');
  const Fab = boolean('Fab', false);
  const Flat = boolean('Flat', false);
  const Fluid = boolean('Fluid', false);
  const Raised = boolean('Raised', false);
  const Rounded = boolean('Rounded', false);
  const State = select('State', ButtonStates, '');
  const Size = select('Size', ButtonSizes, '');
  const Variation = select('Variation', ButtonVariations, '');

  return (
    <Button
      onClick={action('clicked')}
      color={Color}
      fab={Fab}
      flat={Flat}
      fluid={Fluid}
      raised={Raised}
      rounded={Rounded}
      state={State}
      size={Size}
      variation={Variation}
    >
      {Label}
    </Button>
  );
}

function ButtonGroups() {
  const numButtons = number('Number of buttons', 3, { min: 1, max: 5 });
  const Borderless = boolean('Borderless', false);
  const Size = select('Size', ButtonSizes, '');
  const buttons = [];

  for (let i = 0; i < numButtons; i++) {
    buttons.push(`Button ${i + 1}`);
  }

  return (
    <ButtonGroup size={Size} borderless={Borderless}>
      {buttons.map((btn, index) => (
        <Button key={index} onClick={action('clicked')}>
          {btn}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export { ButtonDefault, ButtonGroups };
