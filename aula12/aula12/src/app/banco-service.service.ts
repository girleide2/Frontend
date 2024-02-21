import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BancoServiceService {
  listaCarros: any[] = [];

  adicionaCarro(carro:any){
      this.listaCarros.push(carro)
  }
  getListaCarros(){
    return this.listaCarros;
  }
}
