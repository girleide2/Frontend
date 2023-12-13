import { Component } from '@angular/core';

@Component({
  selector: 'app-macaco',
  templateUrl: './macaco.component.html',
  styleUrl: './macaco.component.css'
})
export class MacacoComponent {
nome:string = 'Macaco'
txtEventoParametro: string = 'texto'
imagem: string = 'https://th.bing.com/th/id/R.56b1cd679c03ecbf91c9a59316d2d77c?rik=jzun4h2h16W4eQ&riu=http%3a%2f%2fs02.video.glbimg.com%2f320x200%2f1144169.jpg&ehk=JcDTMVH%2f8lQFZal3vgzvn0E%2fYFo4lmhIB%2fx7Wxof%2fas%3d&risl=&pid=ImgRaw&r=0'
public onClick(): void{
  alert('tchuco tchuco tchuco');
}
public digitandoTexto(event: Event){
  this.txtEventoParametro = (<HTMLInputElement>event.target).value;
  console.log(event);
}
}
