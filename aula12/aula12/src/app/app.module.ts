import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdicionarComponent } from './form-adicionar/form-adicionar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentListarComponent } from './component-listar/component-listar.component';



@NgModule({
  declarations: [
    AppComponent,
    FormAdicionarComponent,
    FormAdicionarComponent,
    ComponentListarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
