import { Component } from '@angular/core';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-exibe-paises',
  templateUrl: './exibe-paises.component.html',
  styleUrl: './exibe-paises.component.css'
})
export class ExibePaisesComponent {
 dados: any[] =[];
 constructor(private paisService: PaisService){ }
 ngOnInit(){
  this.dados = this.paisService.dados;
 }
 
}
