import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs/react';
import 'pam/dist/pam.css';

import {Welcome } from '@storybook/react/demo';
import {ButtonDefault, ButtonGroups} from './Buttons';
import {TableDefault} from './Table';
import {MenuDefault} from './Menu';
import {AlertDefault} from './Alert';

addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Alert', module)
  .add('Basic alert', AlertDefault);

storiesOf('Button', module)
  .add('Basic button', ButtonDefault)
  .add('Button Group', ButtonGroups);

storiesOf('Table', module)
  .add('Basic table', TableDefault);

storiesOf('Menu', module)
  .add('Basic menu', MenuDefault);