import {Version} from "./version.enum";

export interface Order {
  _id?: string;
  pin?: string;
  code?: string;
  email?: string;
  version?: Version;
  activeUrl?: string;
  clothesType?: string;
}
