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
  
  itensNoCarrinho: any[] = []; 

  adicionarAoCarrinho(item: any) {
    this.itensNoCarrinho.push(item);
  }
}
