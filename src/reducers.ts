import { Brand } from './interfaces/brand';
import { Model } from './interfaces/model';
import { Year } from './interfaces/year';
import { Version } from './interfaces/version';
import { Reducer } from 'react';

enum ActionVehicleType {
  AddBrand = 'ADD_BRAND',
  ChangeBrand = 'CHANGE_BRAND',
  AddModel = 'ADD_MODEL',
  ChangeModel = 'CHANGE_MODEL',
  AddYear = 'ADD_YEAR',
  ChangeYear = 'CHANGE_YEAR',
  AddVersion = 'ADD_VERSION',
  ChangeVersion = 'CHANGE_VERSION'
}

export interface IAction {
  type: ActionVehicleType;
  payload: {
    codigo: string;
    nome: string;
  };
}

export interface IState {
  brand: Brand;
  model: Model;
  year: Year;
  version: Version;
  value: string;
}

const vehicleReducer: Reducer<IState, IAction> = (state, action): IState => {
  switch (action.type) {
    case ActionVehicleType.AddBrand:
      return {
        brand: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        model: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        year: {
          codigo: state.year.codigo,
          nome: state.year.nome
        },
        version: {
          codigo: state.version.codigo,
          nome: state.version.codigo
        },
        value: state.value
      };
    case ActionVehicleType.ChangeBrand:
      return {
        brand: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        model: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        year: {
          codigo: state.year.codigo,
          nome: state.year.nome
        },
        version: {
          codigo: state.version.codigo,
          nome: state.version.codigo
        },
        value: state.value
      };
    case ActionVehicleType.AddModel:
      return {
        brand: {
          codigo: state.brand.codigo,
          nome: state.brand.nome
        },
        model: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        year: {
          codigo: state.year.codigo,
          nome: state.year.nome
        },
        version: {
          codigo: state.version.codigo,
          nome: state.version.codigo
        },
        value: state.value
      };
    case ActionVehicleType.ChangeModel:
      return {
        brand: {
          codigo: state.brand.codigo,
          nome: state.brand.nome
        },
        model: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        year: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        version: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        value: state.value
      };
    case ActionVehicleType.AddYear:
      return {
        brand: {
          codigo: state.brand.codigo,
          nome: state.brand.nome
        },
        model: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        year: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        version: {
          codigo: state.version.codigo,
          nome: state.version.nome
        },
        value: state.value
      };
    case ActionVehicleType.ChangeYear:
      return {
        brand: {
          codigo: state.brand.codigo,
          nome: state.brand.nome
        },
        model: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        year: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        version: {
          codigo: state.version.codigo,
          nome: state.version.codigo
        },
        value: state.value
      };
    case ActionVehicleType.AddVersion:
      return {
        brand: {
          codigo: state.brand.codigo,
          nome: state.brand.nome
        },
        model: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        year: {
          codigo: state.year.codigo,
          nome: state.year.nome
        },
        version: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        value: state.value
      };
    case ActionVehicleType.ChangeVersion:
      return {
        brand: {
          codigo: state.brand.codigo,
          nome: state.brand.nome
        },
        model: {
          codigo: state.model.codigo,
          nome: state.model.nome
        },
        year: {
          codigo: state.year.codigo,
          nome: state.year.nome
        },
        version: {
          codigo: action.payload.codigo,
          nome: action.payload.nome
        },
        value: state.value
      };
    default:
      return state;
  }
};

export default vehicleReducer;
