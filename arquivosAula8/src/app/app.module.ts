import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransformaCanoPipe } from './transforma-cano.pipe';
import { CanosPipe } from './canos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransformaCanoPipe,
    CanosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
