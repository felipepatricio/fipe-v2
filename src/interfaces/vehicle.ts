import { Brand } from './brand';
import { Model } from './model';
import { Year } from './year';

export interface Vehicle {
  brand: Brand;
  model: Model;
  year: Year;
  value: string;
}
