import { createContext } from 'react';
import { Vehicle } from './interfaces/vehicle';

export const initialState: Vehicle = {
  brand: {
    nome: '',
    codigo: ''
  },
  model: {
    nome: '',
    codigo: ''
  },
  year: {
    nome: '',
    codigo: ''
  },
  value: ''
};

const VehicleContext = createContext<Vehicle>(initialState);

export default VehicleContext;
