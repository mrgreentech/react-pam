import React from 'react';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';
import Grid, { Unit } from '../src/Components/Grid';
import Form, { Field, Fieldset } from '../src/Components/Form';

function FormDefault() {
  const Stacked = boolean('Stacked', false);
  const Padded = boolean('Padded', false);
  const Aligned = boolean('Aligned', false);

  return (
    <Form stacked={Stacked} padded={Padded} aligned={Aligned}>
      <Grid>
        <Unit default={'1-1'} medium={'1-2'}>
          <Fieldset mode={'column'} legend={'Text and select'}>
            <label htmlFor="input-name">Name</label>
            <Field
              id={'input-name'}
              name={'name'}
              type={'text'}
              placeholder={'John Doe'}
              fluid={true}
            />
            <label htmlFor="input-email">Email</label>
            <Field
              id={'input-email'}
              name={'email'}
              type={'email'}
              placeholder={'john@doe.com'}
              fluid={true}
            />
            <label htmlFor="input-password">Password</label>
            <Field
              id={'input-password'}
              name={'name'}
              type={'password'}
              placeholder={'suPerS3cr37'}
              fluid={true}
            />
            <label htmlFor="select-geek">Choose geek level</label>
            <Field
              id={'select-geek'}
              name={'geek'}
              component={'select'}
              fluid={true}
            >
              <option value="geek">Geek</option>
              <option value="nerd">Nerd</option>
              <option value="dork">Dork</option>
            </Field>
            <label htmlFor="textarea-description">Choose geek level</label>
            <Field
              rows={5}
              placeholder={'The secret of 42...'}
              fluid={true}
              component={'textarea'}
              id={'textarea-description'}
              name={'description'}
            />
          </Fieldset>
        </Unit>
        <Unit default={'1-1'} medium={'1-2'}>
          <Fieldset mode={'column'} legend={'Checkboxes'}>
            <label>
              <Field type={'checkbox'} name={'hipster'} /> I'm a hipster
            </label>
            <label>
              <Field
                type={'radio'}
                name={'options'}
                value={'hipster'}
                defaultChecked={true}
              />{' '}
              Hipster
            </label>
            <label>
              <Field type={'radio'} name={'options'} value={'geek'} /> Geek
            </label>
          </Fieldset>
          <Fieldset mode={'column'} legend={'Misc'}>
            <label htmlFor="input-file">File</label>
            <Field id={'input-file'} name={'file'} type={'file'} fluid={true} />
            <label htmlFor="input-color">Color</label>
            <Field
              id={'input-color'}
              name={'color'}
              type={'color'}
              fluid={true}
            />
            <label htmlFor="input-range">Range</label>
            <Field
              id={'input-range'}
              name={'range'}
              type={'range'}
              min={-5}
              max={5}
              fluid={true}
              list={'tickmarks'}
            />
            <datalist id={'tickmarks'}>
              <option value="-5" label="-5" />
              <option value="-4" />
              <option value="-3" />
              <option value="-2" />
              <option value="-1" />
              <option value="0" label="0" />
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" label="5" />
            </datalist>
          </Fieldset>
        </Unit>
      </Grid>
    </Form>
  );
}

export { FormDefault };
