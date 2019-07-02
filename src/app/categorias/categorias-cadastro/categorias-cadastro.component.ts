import { CategoriasService } from './../categorias.service';
import { Categoria } from '../model';
import { MessageService } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  categoria = new Categoria();


  constructor(
    private service: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl){
    this.service.adicionar(this.categoria)
    .then( ()=>{
      this.messageService.add({severity: 'succes', summary:'Cadastro', detail:'Categoria '+this.categoria.distancia+' KM Cadastrada'});
      form.reset();
    })
  }

  ngOnInit() {
    const codigoCategoria = this.rota.snapshot.params['id'];
    if(codigoCategoria){
      this.carregarCategoria(codigoCategoria);
      console.log(this.categoria.id);
    }
  }

  carregarCategoria(id: number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
       this.categoria = data;
      }
    );
  }

  alterar(form: FormControl){
    this.service.alterar(this.categoria)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Categorias '+this.categoria.distancia+' KM Alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl){
    if(this.editando){
      this.alterar(form);
    }else{+
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.categoria.id);
  }
}
