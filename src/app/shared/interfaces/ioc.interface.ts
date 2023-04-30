import {IOC_TYPE} from "../constants/ioc-types.constant";

export interface IOC {
  article_hash: string;
  id: string;
  ioc: string;
  ioc_around?: string;
  type: IOC_TYPE;
}
