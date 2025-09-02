import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listaprodutoscomponent } from './listaprodutoscomponent/listaprodutoscomponent';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule-module';



@NgModule({
  declarations: [
    Listaprodutoscomponent
  ],
  imports: [
    CommonModule,
    SharedmoduleModule
  ]
})
export class ProdutosmoduleModule { }
