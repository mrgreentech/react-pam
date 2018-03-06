import React from 'react';
import Link from '../src/Components/Link';
import Button from '../src/Components/Button';

function LinkDefault() {
  return <Link href={'#'}>Link</Link>;
}

function LinkCustomComponent() {
  return (
    <div>
      <Link component={'button'}>Button link</Link>
      <Link component={Button}>PAM button</Link>
    </div>
  );
}

export { LinkDefault, LinkCustomComponent };
