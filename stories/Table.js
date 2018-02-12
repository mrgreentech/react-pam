import React from 'react';
import { select, boolean } from '@storybook/addon-knobs/react';
import Table, {Borders,TableHead, TableBody, TableCaption, TableCell, TableRow} from "../src/Components/Table";

function TableDefault() {
  const TableContent = [
    {title: 'Swordfish', rating: 10, year: 2001 },
    {title: 'WarGames', rating: 9, year: 1983 },
    {title: 'Sneakers', rating: 8.9, year: 1992 }
  ];
  const Border = select('Border', Borders, '');
  const Centered = boolean('Centered', false);
  const Fluid = boolean('Fluid', false);
  const Striped = boolean('Striped', false);
  return (
    <Table border={Border} centered={Centered} fluid={Fluid} striped={Striped}>
      <TableCaption>Hello, I'm caption</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {TableContent.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{index +1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.year}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export {TableDefault}