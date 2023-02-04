import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArray'
})
export class NumToArrayPipe implements PipeTransform {
  transform(value: number): unknown[] {
    return Array(Math.floor(value)).fill(null);
  }
}
