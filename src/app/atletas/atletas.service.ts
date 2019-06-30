import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atleta } from './model';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {

  atletasURL = 'http://localhost:8090/atletas';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any>{
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8090/atletas/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8090/atletas';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.atletasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(atleta: Atleta): Promise<any>{
    return this.http.post(this.atletasURL, atleta)
    .toPromise();
  }

  alterar(atleta: Atleta): Promise<any>{
    return this.http.put(this.atletasURL+'/'+atleta.id, atleta)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Atleta> {
    return this.http.get<Atleta>(this.atletasURL+'/'+codigo)
    .toPromise();
  }
}
