export enum TypeBrand {
  Create = 'ADD_BRAND',
  Delete = 'CHANGE_BRAND'
}
export enum TypeModel {
  Create = 'ADD_MODEL',
  Delete = 'CHANGE_MODEL'
}

export enum TypeYear {
  Create = 'ADD_YEAR',
  Delete = 'CHANGE_YEAR'
}

type BrandPayload = {
  [TypeBrand.Create]: {
    codigo: string;
    nome: string;
  };
  [TypeBrand.Delete]: {
    codigo: string;
    nome: string;
  };
};
