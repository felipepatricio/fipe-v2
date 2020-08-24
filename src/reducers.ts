import { Reducer, useReducer } from 'react';
import { initialState } from './VehicleContext';

export const vehicleReducer = useReducer<Reducer<any, any>>((state, action) => {
  switch (action.type) {
    case 'ADD_BRAND':
      return {
        ...state,
        brand: action.payload
      };
    case 'CHANGE_BRAND':
      return {
        ...state,
        brand: action.payload
      };
    case 'ADD_MODEL':
      return {
        ...state,
        model: action.payload
      };
    case 'CHANGE_MODEL':
      return {
        ...state,
        model: action.payload
      };
    case 'ADD_YEAR':
      return {
        ...state,
        year: action.payload
      };
    case 'CHANGE_YEAR':
      return {
        ...state,
        year: action.payload
      };
    default:
      return {};
  }
}, initialState);
