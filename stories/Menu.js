import React from 'react';
import { select, boolean } from '@storybook/addon-knobs/react';
import Menu, {
  MenuList,
  MenuHeading,
  MenuItem,
  MenuLink,
  MenuItemStates
} from '../src/Components/Menu';

function MenuDefault() {
  const MenuItems = [
    { label: 'Home', path: '#' },
    {
      label: 'Stuff',
      path: '#',
      toggleStates: true,
      dropdown: [
        { label: 'Node', path: '#' },
        { type: 'separator' },
        { label: 'JavaScript', path: '#', toggleStates: true },
        { label: 'Angular', path: '#' },
        { label: 'React', path: '#' }
      ]
    },
    { type: 'separator' },
    { label: 'About', path: '#' }
  ];

  const Vertical = boolean('Vertical', false);
  const Truncated = boolean('Truncated', false);
  const Fill = boolean('Fill', false);
  const State = select('Item state', MenuItemStates);
  const showHeading = boolean('Show Heading', false);
  return (
    <Menu
      vertical={Vertical}
      truncated={Truncated}
      fill={Fill}
      style={{ minWidth: '500px' }}
    >
      {showHeading && <MenuHeading>Menu Heading</MenuHeading>}
      <MenuList>
        {MenuItems.map((item, index) => {
          if (item.type === 'separator') {
            return <MenuItem key={index} isSeparator={true} />;
          }
          return (
            <MenuItem
              state={item.toggleStates ? State : ''}
              isDropDown={item.dropdown && Boolean(item.dropdown.length)}
              key={index}
            >
              <MenuLink href={item.path}>{item.label}</MenuLink>
              {item.dropdown &&
                item.dropdown.length && (
                  <MenuList isChild={true}>
                    {item.dropdown.map((child, childIndex) => {
                      if (child.type === 'separator') {
                        return <MenuItem key={childIndex} isSeparator={true} />;
                      }
                      return (
                        <MenuItem
                          key={childIndex}
                          state={child.toggleStates ? State : ''}
                        >
                          <MenuLink href={child.path}>{child.label}</MenuLink>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export { MenuDefault };
