import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-novo-aula9';
  rota: string = '';
  inputText: string = '';
  constructor(private rotas:Router, private rotaAtiva: ActivatedRoute){
    
  }
}

