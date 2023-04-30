import {IOC} from "./ioc.interface";

export interface Article {
  date: string;
  filename?: string;
  ioc_count: number;
  link: string;
  source?: string;
  title: string;
  year: number;
}

export interface ArticleBody {
  article: string;
}

export interface FullIOCInfo {
  article: Article;
  ioc: IOC;
}
