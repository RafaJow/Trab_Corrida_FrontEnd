import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atleta } from './model';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {

  atletasURL = 'http://localhost:8090/';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any>{
    if(filtro.nome){
      this.urlFiltro = this.atletasURL+'atletas/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = this.atletasURL+'atletas';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.atletasURL+'atletas/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(atleta: Atleta): Promise<any>{
    return this.http.post(this.atletasURL+'atletas/', atleta)
    .toPromise();
  }

  alterar(atleta: Atleta): Promise<any>{
    return this.http.put(this.atletasURL+'atletas/'+atleta.id, atleta)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Atleta> {
    return this.http.get<Atleta>(this.atletasURL+'atletas/'+codigo)
    .toPromise();
  }
}
