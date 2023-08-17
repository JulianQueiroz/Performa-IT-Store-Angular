import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Produtos } from 'src/app/produtos';
@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.css']
})
export class PrateleiraComponent implements OnInit{
  constructor(private _carrinhoService: CarrinhoService){}
  public produtos:Produtos[]=[]
  ngOnInit(){
    this._carrinhoService.getProdutos()
    .subscribe(
      retorno => {
        this.produtos = retorno.map(item => {
          return new Produtos(
            item.id,
            item.image,
            item.name,
            item.oldPrice,
            item.price,
            item.parcelas
          )
        })
      }
    )
  }  
  
  mostrarIndice(index: number) {
    this._carrinhoService.atualizarIndiceProdutoSelecionado(index);
  }
}
