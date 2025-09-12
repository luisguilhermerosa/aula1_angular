import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';


@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule, 
    MatTableModule,        
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class DadosModule { }
