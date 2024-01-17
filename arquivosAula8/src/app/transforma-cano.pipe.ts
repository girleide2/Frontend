import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformaCano'
})
export class TransformaCanoPipe implements PipeTransform {

  transform(value: string): unknown {
    return  value.split(' ').slice(0, 2).join(' ') + '...';
  }

}
