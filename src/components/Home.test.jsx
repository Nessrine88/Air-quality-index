import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Home from './Home';

test('renders "Air Quality Index In Tunisia"', () => {
  const { getByText } = render(<Provider store={store}><Home /></Provider>);
  const headerElement = getByText('Air Quality Index In Tunisia');
  expect(headerElement).toBeInTheDocument();
});
