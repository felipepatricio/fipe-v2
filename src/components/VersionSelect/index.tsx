import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const Index: React.FC = () => {
  const [versions, setVersions] = useState([]);
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    axios
      .get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then((response) => {
        return setVersions(response.data);
      });
  }, []);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log(event.target);
    setVersion(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="versionSelect">Versões</InputLabel>
      <Select labelId="versionSelect" value={version} onChange={handleChange}>
        {versions.map(({ nome, codigo }) => (
          <MenuItem key={codigo} value={codigo}>
            {nome}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default memo(Index);
