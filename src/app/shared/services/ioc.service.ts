import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IocByType} from "../interfaces/ioc-by-type.interface";
import {IocsPerYears} from "../interfaces/iocs-per-period.interface";
import {IOC_TYPE} from "../constants/ioc-types.constant";
import {IOC} from "../interfaces/ioc.interface";
import {FullIOCInfo} from "../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class IocService {

  readonly BASE_URL = '/api/iocs/'

  constructor(private http: HttpClient) {}

  public getByTypes(): Observable<IocByType[]> {
    return this.http.get<IocByType[]>(`${this.BASE_URL}getByTypes`);
  }

  public getByYearsYears(): Observable<IocsPerYears[]> {
    return this.http.get<IocsPerYears[]>(`${this.BASE_URL}getByYears`);
  }

  public getByYear(year: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.BASE_URL}getByYear`, { params: { year } });
  }

  public getByMonth(year: number, month: number): Observable<IOC[]> {
    return this.http.get<IOC[]>(`${this.BASE_URL}getByMonth`, { params: { year, month } });
  }

  public getByType(type: IOC_TYPE): Observable<IOC[]> {
    return this.http.get<IOC[]>(`${this.BASE_URL}getByType`, { params: { type } });
  }

  public getByQuery(query: string): Observable<IOC[]> {
    return this.http.get<IOC[]>(`${this.BASE_URL}getByQuery`, { params: { query } });
  }

  public getById(id: number): Observable<FullIOCInfo> {
    return this.http.get<FullIOCInfo>(`${this.BASE_URL}getById`, { params: { id } })
  }
}
