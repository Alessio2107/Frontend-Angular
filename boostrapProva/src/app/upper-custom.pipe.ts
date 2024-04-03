import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCustom'
})
export class UpperCustomPipe implements PipeTransform {

  transform(value:string): string {
    return value.toUpperCase();
  }

}
