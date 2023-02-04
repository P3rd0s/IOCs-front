import {Component, OnDestroy, OnInit} from '@angular/core';
import {Color, LegendPosition} from "@swimlane/ngx-charts";
import {IocService} from "../../shared/services/ioc.service";
import {Subject, takeUntil} from "rxjs";
import {IOC_TYPE, IOC_TYPE_COLOR, IOC_TYPE_ICON} from "../../shared/constants/ioc-types.constant";
import {ChartInterface} from "../../shared/interfaces/chart.interface";
import {IOC} from "../../shared/interfaces/ioc.interface";
import {fadeCardIn, fadeCardOut} from "./animations/ioc-card.animation";
import {fadeListIn, fadeListOut} from "./animations/ioc-by-month.animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeCardIn, fadeCardOut, fadeListIn, fadeListOut]
})
export class DashboardComponent implements OnInit, OnDestroy {
  iocs: ChartInterface[] = [];
  legendPosition = LegendPosition.Below
  colorScheme = {domain: [] as string[]} as Color;

  iocsPerYears: ChartInterface[] = [];
  iocsPerYear: ChartInterface[] = [];
  iocsPerMonth: IOC[] = [];
  expandedListIndex: number | null = null;
  selectedChartYear: number = 0;

  searchQuery = '';

  selectedIocLists: { type: IOC_TYPE; iocs: IOC[] }[] = [];
  lightedList: IOC_TYPE | null = null;

  readonly IOC_TYPE_ICON = IOC_TYPE_ICON;

  private _$destroySubj = new Subject<void>();

  constructor(private _iocService: IocService) {}

  ngOnInit() {
    this._loadByTypesData();
    this._loadByYearsData();

    this._loadByType(IOC_TYPE.CVE);
    this._loadByType(IOC_TYPE.IP);
    this._loadByType(IOC_TYPE.Email);
  }

  ngOnDestroy() {
    this._$destroySubj.next();
    this._$destroySubj.complete();
  }

  public onPieTypeSelected(event: ChartInterface | string): void {
    const name = typeof event === "string" ? event : event.name
    this.lightedList = name as IOC_TYPE;
    this.expandedListIndex = null;
    if (this.selectedIocLists.find(list => list.type === name)) {
      return;
    }
    this.selectedIocLists.pop();
    this._loadByType(name as IOC_TYPE);
  }

  public onYearSelected(event: ChartInterface): void {
    if (this.iocsPerYear.length) {
      this._loadByMonth(this.iocsPerYear.findIndex((month) =>
        month.value === event.value && month.name === event.name) + 1);
    } else {
      this.selectedChartYear = +event.name;
      this._loadByYearData(+event.name);
    }
  }

  public loadByQuery(): void {
    if (this.searchQuery.length <= 3) return;
    this._iocService.getByQuery(this.searchQuery)
      .pipe(takeUntil(this._$destroySubj))
      .subscribe((resp) => {
        if (this.selectedIocLists.length === 3) {
          this.selectedIocLists.pop();
        }
        this.selectedIocLists.unshift({ type: IOC_TYPE.Search, iocs: resp });
      });
  }

  private _loadByTypesData(): void {
    this._iocService.getByTypes()
      .pipe(takeUntil(this._$destroySubj))
      .subscribe((resp) => {
        this.iocs = resp.map(ioc => ({name: ioc.type, value: ioc.count}));
        this.iocs.forEach((ioc) => this.colorScheme.domain.push(IOC_TYPE_COLOR[ioc.name]))
      })
  }

  private _loadByYearsData(): void {
    this._iocService.getByYearsYears()
      .pipe(takeUntil(this._$destroySubj))
      .subscribe((resp) => {
        this.iocsPerYears = resp.map(ioc => ({name: ioc.year.toString(), value: ioc.count}));
      })
  }

  private _loadByYearData(year: number): void {
    this._iocService.getByYear(year)
      .pipe(takeUntil(this._$destroySubj))
      .subscribe((resp) => {
        this.iocsPerYear = resp.map((n, index) => {
          const date = new Date();
          date.setMonth(index);
          return {name: date.toLocaleDateString([], {month: "short"}), value: n}
        })
      })
  }

  private _loadByMonth(month: number): void {
    this._iocService.getByMonth(this.selectedChartYear, (new Date(Date.parse(`${month} 1, 2022`)).getMonth() + 1))
      .pipe(takeUntil(this._$destroySubj))
      .subscribe(resp => this.iocsPerMonth = resp);
  }

  private _loadByType(type: IOC_TYPE): void {
    this._iocService.getByType(type)
      .pipe(takeUntil(this._$destroySubj))
      .subscribe((resp) => {
        if (this.selectedIocLists.length === 3) {
          this.selectedIocLists.pop();
        }
        this.selectedIocLists.unshift({type, iocs: resp});
      })
  }
}
