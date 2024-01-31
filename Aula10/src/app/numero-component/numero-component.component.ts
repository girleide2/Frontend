// numero-component.component.ts
import { Component, OnInit } from '@angular/core';
import { NumeroObservableService } from '../numero-observable.service';

@Component({
  selector: 'app-numero-component',
  templateUrl: './numero-component.component.html',
  styleUrl: './numero-component.component.css'
})
export class NumeroComponentComponent implements OnInit {
  numeros: number[] = [];

  constructor(private numeroService: NumeroObservableService) { }

  ngOnInit(): void {
    // Inscreve-se ao observable ao inicializar o componente
    this.numeroService.getNumeros().subscribe(numero => {
      this.numeros.push(numero);
    });
  }
}
