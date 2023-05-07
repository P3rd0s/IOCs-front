import { Injectable } from '@angular/core';
import {IOC_TYPE} from "../constants/ioc-types.constant";
import {IOC} from "../interfaces/ioc.interface";
import {ChartInterface} from "../interfaces/chart.interface";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public searchQuery = '';
  public selectedIocLists: { type: IOC_TYPE; iocs: IOC[] }[] = [];
  public selectedChartYear: number = 0;
  public iocsPerYear: ChartInterface[] = [];
  public iocsPerMonth: IOC[] = [];
}
