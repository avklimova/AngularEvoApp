import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusPipe'
})
export class PlusPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Number(value)+5;
  }

}
