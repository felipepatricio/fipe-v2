import { Reducer, useReducer } from 'react';
import { initialState } from './VehicleContext';

export const vehicleReducer = useReducer<Reducer<any, any>>((state, action) => {
  switch (action.type) {
    case 'ADD_BRAND':
      return {
        state
      };
    case 'CHANGE_BRAND':
      return {
        state
      };
    case 'ADD_MODEL':
      return {
        state
      };
    case 'CHANGE_MODEL':
      return {
        state
      };
    case 'ADD_YEAR':
      return {
        state
      };
    case 'CHANGE_YEAR':
      return {
        state
      };
    default:
      return {};
  }
}, initialState);
