import { Component } from '@angular/core';

@Component({
  selector: 'app-listaprodutocomponent',
  standalone: false,
  templateUrl: './listaprodutocomponent.html',
  styleUrl: './listaprodutocomponent.css'
})
export class Listaprodutocomponent {
mostrarlista: boolean = true;


 lista =  [
 {nome: 'luis'},
 {nome: 'lucas'}
 ]
 
}
