import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render Brands select', () => {
  const { getByLabelText } = render(<App />);
  const selectBrand = getByLabelText('Marca');

  expect(selectBrand).not.toBeNull();
});

it('Should render Model select', () => {
  const { getByLabelText } = render(<App />);
  const selectModel = getByLabelText('Modelo');

  expect(selectModel).not.toBeNull();
});

it('Should render year select', () => {
  const { getByLabelText } = render(<App />);
  const selectYear = getByLabelText('Ano');

  expect(selectYear).not.toBeNull();
});

it('Should render Versions select', () => {
  const { getByLabelText } = render(<App />);
  const selectVersion = getByLabelText('Versões');

  expect(selectVersion).not.toBeNull();
});

it('Should render name input', () => {
  const { getByLabelText } = render(<App />);
  const inputName = getByLabelText('Nome');

  expect(inputName).not.toBeNull();
});

it('Should render email input', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('E-mail');

  expect(inputEmail).not.toBeNull();
});

it('Should render a consultation price button', () => {
  const { getByLabelText } = render(<App />);
  const buttonConsultationPrice = getByLabelText('Consultar preço');

  expect(buttonConsultationPrice).not.toBeNull();
});
