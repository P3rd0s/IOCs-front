import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeURIComponent'
})
export class EncodeURIComponentPipe implements PipeTransform {
  transform(value?: string, ...args: unknown[]): string {
    return (value ? encodeURIComponent(value.replaceAll('\n', '')).replaceAll('-', '%2D') : '');
  }
}
