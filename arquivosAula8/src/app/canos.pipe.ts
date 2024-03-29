import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canos'
})
export class CanosPipe implements PipeTransform {

  transform(valor: string): string{
    return valor.replace(/\b\w/g, char => char.toUpperCase());
  }

}
