import { Pipe, PipeTransform } from '@angular/core';
import {ChartInterface} from "../interfaces/chart.interface";

@Pipe({
  name: 'dateNumToName'
})
export class DateNumToNamePipe implements PipeTransform {

  transform(values: ChartInterface[]): ChartInterface[] {
    return values.map((value) => {
      const date = new Date();
      date.setMonth(+value.name);
      return { name: date.toLocaleDateString([], {month: "short"}), value: value.value};
    });
  }

}
