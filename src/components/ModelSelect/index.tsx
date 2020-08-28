import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Model } from '../../interfaces/model';

const ModelSelect: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [model, setModel] = useState<string>('');

  useEffect(() => {
    axios
      .get('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos')
      .then((response) => {
        return setModels(response.data.modelos);
      });
  }, []);
  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    return setModel(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="modelSelect">Modelo</InputLabel>
      <Select labelId="modelSelect" value={model} onChange={handleChange}>
        {models.map(({ nome, codigo }) => (
          <MenuItem key={codigo} value={codigo}>
            {nome}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default memo(ModelSelect);
