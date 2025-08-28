import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
mostrarLista: boolean = true;
tamanhoFonte = 16;

listaNome = [
  {id: '234',nome:'Luis', estadoAtivo: 'inativo' },
  {id: '597',nome:'Thiago', estadoAtivo: 'ativo' },
];

toggleLista(){
  this.mostrarLista = !this.mostrarLista;
}

aumentarFonte(){
  this.tamanhoFonte +=2;
  
}

diminuirFonte(){
  if (this.tamanhoFonte > 25)
  this.tamanhoFonte -=2;
}

}


