import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome: string = "Arara"
  imagem: string = 'https://i.pinimg.com/originals/53/e5/87/53e587b4e96a79868d37a2291975c5ae.png'
  public onClick(): void{
    alert('Clicou em mim')
  }
}