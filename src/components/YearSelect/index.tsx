import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { Brand } from '../../interfaces/brand';

const BrandSelect: React.FC = () => {
  const [years, setYears] = useState<Brand[]>([]);
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    axios
      .get<Brand[]>(
        'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos'
      )
      .then((response) => {
        return setYears(response.data);
      });
  }, []);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log(event);
    setYear(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="yearSelect">Ano</InputLabel>
      <Select labelId="yearSelect" value={year} onChange={handleChange}>
        {years.map(({ nome, codigo }) => (
          <MenuItem key={codigo} value={codigo}>
            {nome}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default memo(BrandSelect);
