import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ModelSelect: React.FC = () => {
  return (
    <>
      <InputLabel id="modelSelect">Modelo</InputLabel>
      {console.log('test')}
      <Select labelId="modelSelect">
        <MenuItem></MenuItem>
      </Select>
    </>
  );
};

export default ModelSelect;
