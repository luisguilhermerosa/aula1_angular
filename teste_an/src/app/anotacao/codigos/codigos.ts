import { Component } from '@angular/core';

@Component({
  selector: 'app-codigos',
  standalone: false,
  templateUrl: './codigos.html',
  styleUrl: './codigos.css'
})
export class Codigos {
/*

<p>criar um botao
    <button (click)="nome da variavel criada()">texto que aparece</button>
</p>

<p> para exibir uma lista 
    <ul *ngIf="nome da variavel que fica no t.s, ela deve ser true para que apareça">
    <li *ngFor="let item of nome da variavel que esta a lista inteira"> 
        {{ item.nome}} 
         {{item.preco | number: '1.0-0'}}    | number: '1.0-0' = esse comando é para estetica do numero
        </ul>
        </li>
        </p>

<p> esse comando é o if, e o style é para cor ou tamanhoFonte
    <p *ngIf="item.variavel da tabela > 0" style="color: green;" >texto que vai aparecer </p>
</p>

<p> isso vai no ts, é para criar lista 
    
    nome da lista =[
     {nome: 'geladeira', preco: 6000, estoque: 20},
     {nome: 'micro-ondas', preco: 3200, estoque:0}
      ];</p>

      <p> esse eu uso para preços ou para contas
        
        Nome da variavel() {
      for (let i=0; i < this.produtos.length; i++) {
        this.produtos[i].preco = this.produtos[i].preco * 1.10;
      }
     }
      </p>

      <p> esse é o style para o tamanho da fonte, se coloca no <ul></ul> 
        
        [style.font-size.px]="tamanhoFonte"

      </p>


      <p>
        ocultar e visualizar lista, o diferente é o toggleLista

        <button (click)="toggleLista()">ocultar e visualizar</button>

        porem o toggleLista é a variavel que fica no ts

        toggleLista(){
  this.mostrarLista = !this.mostrarLista;
}
! = nao
      </p> */
}