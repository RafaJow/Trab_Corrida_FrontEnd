import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { AtletasCadastroComponent } from './atletas/atletas-cadastro/atletas-cadastro.component';
import { Atleta } from './atletas/model';
import { AtletasPesquisaComponent } from './atletas/atletas-pesquisa/atletas-pesquisa.component';
import { AtletasModule } from './atletas/atletas.module';
import { EventosPesquisaComponent } from './eventos/eventos-pesquisa/eventos-pesquisa.component';
import { EventosCadastroComponent } from './eventos/eventos-cadastro/eventos-cadastro.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmationService, SelectItem } from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';

import { EventosModule } from './eventos/eventos.module';
import { CategoriasModule } from './categorias/categorias.module';

const rotas: Routes = [
  {path: 'atletas', component: AtletasPesquisaComponent},
  {path: 'atletas/:id', component: AtletasCadastroComponent},
  {path: 'atletas/novo', component: AtletasCadastroComponent},
  {path: 'eventos', component: EventosPesquisaComponent},
  {path: 'eventos/:id', component: EventosCadastroComponent},
  {path: 'eventos/novo', component: EventosCadastroComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent}
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
    EventosModule,
    CategoriasModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    RadioButtonModule,
    CalendarModule,
    SidebarModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
