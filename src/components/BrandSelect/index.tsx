import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { Brand } from '../../interfaces/brand';

const BrandSelect: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [brand, setBrand] = useState<string>('');

  useEffect(() => {
    axios
      .get<Brand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then((response) => {
        return setBrands(response.data);
      });
  }, []);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBrand(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="brandSelect">Marca</InputLabel>
      <Select labelId="brandSelect" value={brand} onChange={handleChange}>
        {brands.map(({ nome, codigo }) => (
          <MenuItem key={codigo} value={codigo}>
            {nome}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default BrandSelect;
