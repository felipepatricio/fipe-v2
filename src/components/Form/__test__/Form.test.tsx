import React from 'react';
import { render } from '@testing-library/react';
import Form from '../index';

describe('Form', () => {
  it('Should render form element', () => {
    const { getByText } = render(<Form />);
    const formElement = getByText(
      'Selecione marca, modelo, ano e versão do veículo:'
    );

    expect(formElement).not.toBeNull();
  });

  it('Should render a consultation price button', () => {
    const { getByText } = render(<Form />);
    const buttonConsultationPrice = getByText(/Consultar preço/);

    expect(buttonConsultationPrice).not.toBeNull();
  });
});
