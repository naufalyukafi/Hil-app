import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Jumbotron from './Components/Jumbotron';

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

test('renders component jumbotron', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Jumbotron />
    </BrowserRouter>
  );
  const linkElement = getByText("Belajar IT Sekaligus Agama Islam");
  expect(linkElement).toBeInTheDocument();
});
