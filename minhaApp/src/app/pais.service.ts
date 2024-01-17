import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  dados: any[]=[]
  teste = new Promise((resolve, reject) => {
    setTimeout(() => {
      this.getNomePaises();
    }, 2000)});

getNomePaises(){
  fetch('https://restcountries.com/v3.1/all')
  .then (resposta => resposta.json())
  //.then(paises => paises.map( (pais:any) => pais.name.common))
  .then (paises => paises.forEach((elemento:any) => {
    this.dados.push([elemento.name.common, elemento.population]);
  }))
  .catch(error => console.error('Erro com a chamada fetch: ', error));
}
}
