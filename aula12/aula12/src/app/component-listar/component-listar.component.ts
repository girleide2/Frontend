import { Component, OnInit } from '@angular/core';
import { BancoServiceService } from '../banco-service.service';


@Component({
  selector: 'app-component-listar',
  templateUrl: './component-listar.component.html',
  styleUrl: './component-listar.component.css'
})
export class ComponentListarComponent {

    listaCarros: any[] = [];
    constructor(private bancoServico: BancoServiceService){
    }

    ngOnInit(): void{
      this.listaCarros = this.bancoServico.getListaCarros();
      console.log(this.listaCarros);
    }
}
