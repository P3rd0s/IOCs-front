import {Component, OnInit} from '@angular/core';
import {FullIOCInfo} from "../../shared/interfaces/article.interface";
import {IocService} from "../../shared/services/ioc.service";
import {ActivatedRoute} from "@angular/router";
import {Subject, switchMap, takeUntil} from "rxjs";
import {IOC_TYPE_GRADIENT, IOC_TYPE_ICON} from "../../shared/constants/ioc-types.constant";
import {tileFromBottom, tileFromLeft, tileFromRight, tileFromTop} from "./animations/ioc-tiles.animation";
import {tableFadeScale} from "./animations/article-table.animation";

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-ioc-details',
  templateUrl: './ioc-details.component.html',
  styleUrls: ['./ioc-details.component.scss'],
  animations: [tileFromLeft, tileFromRight, tileFromTop, tileFromBottom, tableFadeScale]
})
export class IocDetailsComponent implements OnInit{
  readonly IOC_TYPE_ICON = IOC_TYPE_ICON;

  tiles: Tile[] = [];

  iocInfo: FullIOCInfo | null = null;

  private _$destroySubj = new Subject<void>();

  constructor(private _iocService: IocService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.pipe(
      switchMap(params => this._iocService.getById(params['id'])),
      takeUntil(this._$destroySubj)
    ).subscribe(iocInfo => {
      this.iocInfo = iocInfo;

      this.tiles.push({text: iocInfo.ioc.type, cols: 1, rows: 2, color: IOC_TYPE_GRADIENT[iocInfo.ioc.type]});
      this.tiles.push({text: 'IOC ID: ' + iocInfo.ioc.id, cols: 1, rows: 1, color: 'linear-gradient(209deg, rgba(201,130,22,1) 0%, rgba(255,215,64,1) 100%)'});
      this.tiles.push({text: 'TYPE: ' + iocInfo.ioc.type, cols: 2, rows: 1, color: 'linear-gradient(157deg, rgba(81,45,168,1) 0%, rgba(126,89,215,1) 100%)'});
      this.tiles.push({text: 'VALUE: ' + iocInfo.ioc.ioc, cols: 3, rows: 1, color: 'linear-gradient(165deg, rgba(10,98,5,1) 0%, rgba(100,222,84,1) 100%)'});
    });
  }
}
