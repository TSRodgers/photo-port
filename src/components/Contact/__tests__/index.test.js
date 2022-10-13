import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm renders', () => {
  it('renders', () => {
    render(<ContactForm />)
  });
});

describe('Text is visible', () => {
  it('inserts text into html', () => {
    const { getByTestId } = render(<ContactForm />)

    expect(getByTestId('contact')).toHaveTextContent('Contact me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
})