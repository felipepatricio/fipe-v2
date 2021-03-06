import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { Brand } from '../../interfaces/brand';
import { useVehicle } from '../../VehicleContext';

const BrandSelect: React.FC = (): JSX.Element => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const { state } = useVehicle();
  useEffect(() => {
    axios
      .get<Brand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then((response) => {
        return setBrands(response.data);
      });
  }, []);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log(state);
  };

  return (
    <>
      <InputLabel id="brandSelect">Marca</InputLabel>
      <Select labelId="brandSelect" onChange={handleChange}>
        {brands.map(({ nome, codigo }) => (
          <MenuItem key={codigo} value={nome}>
            {nome}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default memo(BrandSelect);
