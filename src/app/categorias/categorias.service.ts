import { Categoria } from 'src/app/categorias/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:8090/';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquiar(filtro: any): Promise<any>{
    if(filtro.nome){
      this.urlFiltro = this.categoriasURL+'categorias/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = this.categoriasURL+'categorias';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.categoriasURL+'categorias/'+id)
    .toPromise().then(() => null);
  }

  adicionar(categoria: Categoria): Promise<any>{
    return this.http.post(this.categoriasURL+'categorias/', categoria)
    .toPromise();
  }

  alterar(categoria: Categoria): Promise<any>{
    return this.http.put(this.categoriasURL+'categorias/'+categoria.id, categoria)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Categoria> {
    return this.http.get<Categoria>(this.categoriasURL+'categorias/'+codigo)
    .toPromise();
  }
}
