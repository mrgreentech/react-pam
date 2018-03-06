import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';
import 'pam/dist/pam.css';

import { Welcome } from '@storybook/react/demo';
import { ButtonDefault, ButtonGroups } from './Buttons';
import { ColumnDefault } from './Columns';
import { TableDefault } from './Table';
import { MenuDefault } from './Menu';
import { AlertDefault } from './Alert';
import { LinkDefault, LinkCustomComponent } from './Link';
import { LoaderDefault } from './Loader';
import { FormDefault } from './Form';
import { TagDefault } from './Tag';
import { TileDefault } from './Tile';
import { VisibilityDefault } from './Visibility';

addDecorator(withKnobs);
addDecorator(centered);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Alert', module).add('Basic alert', AlertDefault);

storiesOf('Button', module)
  .add('Basic button', ButtonDefault)
  .add('Button Group', ButtonGroups);

storiesOf('Column', module).add('Basic columns', ColumnDefault);

storiesOf('Form', module).add('Basic form', FormDefault);

storiesOf('Link', module)
  .add('Basic link', LinkDefault)
  .add('Custom component', LinkCustomComponent);

storiesOf('Loader', module).add('Basic loader', LoaderDefault);

storiesOf('Menu', module).add('Basic menu', MenuDefault);

storiesOf('Table', module).add('Basic table', TableDefault);
storiesOf('Tag', module).add('Basic tag', TagDefault);
storiesOf('Tile', module).add('Basic tile', TileDefault);
storiesOf('Visibility', module).add('Basic visibility', VisibilityDefault);
