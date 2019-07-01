import { AtletasCadastroComponent } from './atletas/atletas-cadastro/atletas-cadastro.component';
import { Atleta } from './atletas/model';
import { AtletasPesquisaComponent } from './atletas/atletas-pesquisa/atletas-pesquisa.component';
import { AtletasModule } from './atletas/atletas.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmationService } from 'primeng/api';

const rotas: Routes = [
  {path: 'atletas', component: AtletasPesquisaComponent},
  {path: 'atletas/:id', component: AtletasCadastroComponent},
  {path: 'atletas/novo', component: AtletasCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AtletasModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    RadioButtonModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
