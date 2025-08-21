import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

  nome = 'Thiago';

  caminhoImagem = ''

  dizerOi(){
    this.nome = 'ola quarto termo A'
    
  }
}
