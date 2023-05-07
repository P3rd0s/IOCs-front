import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Article, ArticleBody} from "../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly BASE_URL = '/api/articles/'

  constructor(private http: HttpClient) {}

  public getById(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.BASE_URL}getById`, { params: { id } });
  }
  public downloadPDFById(id: string): Observable<Blob> {
    return this.http.get(`${this.BASE_URL}loadDataById`, { params: { id }, responseType: 'blob' });
  }

  public getDataById(id: string): Observable<ArticleBody> {
    return this.http.get<ArticleBody>(`${this.BASE_URL}getDataById`, { params: { id } });
  }
}
