import {IOC_TYPE} from "../constants/ioc-types.constant";

export interface IOC {
  article_hash: string;
  id: string;
  ioc: string;
  iocs_paragraph?: string;
  type: IOC_TYPE;
}
