import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from './model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventosURL = 'http://localhost:8090/';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any>{
    if(filtro.nome){
      this.urlFiltro = this.eventosURL+'eventos/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = this.eventosURL+'eventos';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.eventosURL+'eventos/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(evento: Evento): Promise<any>{
    return this.http.post(this.eventosURL+'eventos/', evento)
    .toPromise();
  }

  alterar(evento: Evento): Promise<any>{
    return this.http.put(this.eventosURL+'eventos/'+evento.id, evento)
    .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<Evento> {
    return this.http.get<Evento>(this.eventosURL+'eventos/'+codigo)
    .toPromise();
  }
}
