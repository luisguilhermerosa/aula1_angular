import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProdutosModule } from './produtos/produtos-module';
import { ToolbarModule } from './toolbar/toolbar-module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    App,
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule,
    ToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
