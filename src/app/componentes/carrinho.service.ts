import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
