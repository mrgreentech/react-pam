import React from 'react';
import { select, number } from '@storybook/addon-knobs/react';
import { Column, gapOptions, widthOptions } from '../src/Components/Column';

function ColumnDefault() {
  const gap = select('Gap space', gapOptions, '');
  const width = select('Min width', widthOptions, '');
  const columns = number('Columns', 3, { min: 1, max: 5 });

  return (
    <Column gap={gap} width={width} columns={columns}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in blandit
      enim, vel euismod lorem. Ut egestas orci at diam iaculis rhoncus. Praesent
      blandit, quam sed pretium tincidunt, ipsum libero maximus turpis, vel
      pharetra metus orci id erat. Donec rutrum lectus diam, bibendum tincidunt
      augue varius quis. Maecenas at sodales urna. Mauris pellentesque diam nec
      eros gravida facilisis. Duis tempor ante mauris, non tristique sapien
      pulvinar vitae.<br />
      <br />
      Morbi pretium auctor sem at placerat. Ut quam lacus, lobortis eu orci at,
      dictum sollicitudin felis. Ut a leo mauris. Pellentesque sit amet
      ullamcorper ante, id tristique mi. In hac habitasse platea dictumst.
      Vivamus ut dapibus quam, vel convallis nisi. Aliquam quis mauris aliquam,
      gravida nisi et, sodales nisi. Donec finibus, turpis at maximus suscipit,
      nisi nulla suscipit lorem, a iaculis magna dolor nec mauris. Nullam
      tristique est id ipsum blandit vulputate.<br />
      <br />
      Nunc ut ultrices nunc. Mauris aliquam quam id viverra egestas. Nullam
      mollis venenatis orci sit amet convallis. In hac habitasse platea
      dictumst. Praesent ornare arcu et orci aliquet, sit amet ultrices ante
      tempor. Nunc dictum risus ac odio lobortis tincidunt. Maecenas rhoncus
      ipsum ac tempor aliquet. Maecenas elementum ornare massa, ac pharetra
      massa pulvinar vel. Duis at sagittis tortor, eget varius lectus. Nulla
      pulvinar magna a elit lacinia fermentum.<br />
      <br />
      Pellentesque dignissim ligula id dignissim accumsan. Etiam at justo sed
      nisl vulputate efficitur. Morbi quis venenatis eros. Vestibulum accumsan
      ut purus vitae molestie. Proin rhoncus erat sit amet ipsum egestas, vitae
      mattis odio vulputate. Mauris vel condimentum mi. Morbi laoreet orci ac
      velit vulputate pulvinar. Integer pretium sapien nec nisl pulvinar
      porttitor. Vestibulum elit elit, volutpat ac feugiat sed, efficitur in
      eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Suspendisse efficitur risus felis, eget tristique ex ullamcorper eget.
      Phasellus pharetra, massa ut cursus rhoncus, enim urna pellentesque diam,
      ut commodo arcu erat a ex. Donec ex ipsum, consequat a justo non,
      consectetur gravida turpis. Mauris convallis vitae justo in tristique.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
      eleifend sollicitudin massa, sit amet pharetra mauris suscipit ut.<br />
      <br />
      Morbi ultrices vitae odio sit amet sodales. Nullam sem libero, facilisis
      sit amet velit in, consectetur consequat eros. Vestibulum eu justo
      laoreet, convallis dui sed, commodo elit. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Vivamus scelerisque
      dignissim diam, quis euismod ante dapibus vel. Donec sit amet erat non
      lectus condimentum dignissim vel condimentum ligula. Donec interdum
      interdum fringilla. Duis sit amet vehicula diam. Donec metus arcu, maximus
      vel iaculis et, vehicula eget nibh. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Etiam vitae tempor lectus. Aliquam tristique
      ipsum metus, non imperdiet augue semper a. Curabitur ullamcorper tempor
      orci, ut scelerisque erat sagittis ut. Donec fermentum semper erat ornare
      consequat.
    </Column>
  );
}

export { ColumnDefault };
