import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
mostrarLista: boolean = true;
fontSize = 16;

listaNomes = [
  {id: '234',nome:'Luis', ativo: 'true'},
  {id: '597',nome:'Thiago', inativo:'false'},
];

toggleLista(){
  this.mostrarLista = !this.mostrarLista;
}

aumentarFonte(){
  this.fontSize +=5;
  
}

diminuirFonte(){
  this.fontSize -=5;
}



}
