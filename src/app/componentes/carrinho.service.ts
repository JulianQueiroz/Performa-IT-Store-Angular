import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produtos } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  anuncioPrincipal: Produtos | null = null;
  mostrarCarrinho: boolean = false
  private readonly API =  'http://localhost:3000/produtos'
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.API)
  }
  indiceProdutoSelecionadoSource = new BehaviorSubject<number>(0);
  indiceProdutoSelecionado$ = this.indiceProdutoSelecionadoSource.asObservable();
  
  atualizarIndiceProdutoSelecionado(index: number) {
    this.indiceProdutoSelecionadoSource.next(index);
  }
  
  itensNoCarrinho: Produtos[] = []; 


  adicionarAoCarrinho(item: any) {
    this.itensNoCarrinho.push(item);
  }
  getItemNaSacola(id: number): Produtos | undefined {
    return this.itensNoCarrinho.find(item => item.id === id);
  }  

  removerItem(produto: Produtos) {
    const index = this.itensNoCarrinho.indexOf(produto);
    if (index !== -1) {
      this.itensNoCarrinho.splice(index, 1);
    }
  }

}
