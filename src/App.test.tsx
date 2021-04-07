import React from 'react';
import { render, screen } from '@testing-library/react';
import { Beranda } from "./Pages"
import { BrowserRouter } from 'react-router-dom';

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

test('renders page beranda', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Beranda />
    </BrowserRouter>
  );
  const linkElement = getByText("HAFIDZ IT LUMAJANG");
  expect(linkElement).toBeInTheDocument();
});
