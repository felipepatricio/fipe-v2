import { Brand } from './brand';
import { Model } from './model';
import { Year } from './year';
import { Version } from './version';

export interface Vehicle {
  brand: Brand;
  model: Model;
  year: Year;
  version: Version;
  value: string;
}
