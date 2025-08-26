import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

listaNomes = [
  {id: '234',nome:'Luis', ativo: 'true'},
  {id: '597',nome:'Thiago', inativo:'false'},
]

mostrarLista: boolean = true;

}
