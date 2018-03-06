import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs/react';
import { Tag, TagVariation } from '../src/Components/Tag';
import { Text, TextTypes } from '../src/Components/Typography';

function TagDefault() {
  const variation = select('Variation', TagVariation, '');
  const tagText = text('Tag text', 'Example');
  const rounded = boolean('Rounded', false);
  const textSize = select('Text size', TextTypes, '');
  return (
    <Text type={textSize}>
      Comparative text{' '}
      <Tag variation={variation} rounded={rounded}>
        {tagText}
      </Tag>
    </Text>
  );
}

export { TagDefault };
