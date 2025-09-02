import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosmoduleRoutingModule } from './produtosmodule-routing-module';
import { Listaprodutocomponent } from './listaprodutocomponent/listaprodutocomponent';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule-module';


@NgModule({
  declarations: [
    Listaprodutocomponent
  ],
  imports: [
    CommonModule,
    ProdutosmoduleRoutingModule,
    SharedmoduleModule
  ]
})
export class ProdutosmoduleModule { }
