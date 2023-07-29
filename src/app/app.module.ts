import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {   HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListarImagenesComponent } from './components/listar-imagenes/listar-imagenes.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    ListarImagenesComponent,
    SpinnerComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
