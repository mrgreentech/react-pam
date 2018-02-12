import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';
import Button, {Colors, States, Sizes, Variations} from '../src/Components/Button'
import ButtonGroup from '../src/Components/Button/ButtonGroup'

function ButtonDefault() {
  const Label = text('Label', 'My button');
  const Color = select('Color', Colors, '');
  const Fab = boolean('Fab', false);
  const Flat = boolean('Flat', false);
  const Fluid = boolean('Fluid', false);
  const Raised = boolean('Raised', false);
  const Rounded = boolean('Rounded', false);
  const State = select('State', States, '');
  const Size = select('Size', Sizes, '');
  const Variation = select('Variation', Variations, '');
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
      variation={Variation}>
        {Label}
      </Button>
  );
}

function ButtonGroups() {
  const numButtons = number('Number of buttons', 3, {min: 1, max:5})
  const Borderless = boolean('Borderless', false);
  const Size = select('Size', Sizes, '');
  const buttons = [];

  let i = 0;
  while(i < numButtons) {
    buttons.push(`Button ${i + 1}`);
    i++;
  }

  return (
    <ButtonGroup size={Size} borderless={Borderless}>
      {buttons.map(btn => (
        <Button onClick={action('clicked')}>
          {btn}
        </Button>
      ))}

    </ButtonGroup>
  );
}

export {ButtonDefault, ButtonGroups};