import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  constructor(public _carrinhoService:CarrinhoService){}
  semItens = false;

}
