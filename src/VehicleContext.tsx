import React, { createContext, useReducer, Reducer, useContext } from 'react';
import vehicleReducer, { IAction, IState } from './reducers';

export const initialState: IState = {
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
  version: {
    nome: '',
    codigo: ''
  },
  value: ''
};

const VehicleContext = createContext(initialState);

export default function VehicleProvider({ children }: any): JSX.Element {
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    vehicleReducer,
    initialState
  );
  return (
    <VehicleContext.Provider value={{ state, dispatch }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicle() {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }

  const { state, dispatch } = context;

  return { state, dispatch };
}
