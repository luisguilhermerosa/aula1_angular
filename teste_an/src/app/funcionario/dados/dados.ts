import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {
listaVisivel: boolean = true;

listaFuncionario = [
  {nome: 'guigo', salario: '1.000'},
  {nome: 'jonathan', salario: '1.500'}
]

 mostrarLista() {
    this.listaVisivel = true;
  }

   ocultarLista() {
    this.listaVisivel = false;
  }

}
