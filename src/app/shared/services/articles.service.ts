import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ArticleBody} from "../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly BASE_URL = '/api/articles/'

  constructor(private http: HttpClient) {}

  public downloadById(id: string): Observable<Blob> {
    return this.http.get(`${this.BASE_URL}loadById`, { params: { id }, responseType: 'blob' });
  }

  public getById(id: string): Observable<ArticleBody> {
    return this.http.get<ArticleBody>(`${this.BASE_URL}getById`, { params: { id } });
  }
}
