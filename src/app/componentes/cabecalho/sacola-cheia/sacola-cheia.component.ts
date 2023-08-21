import { CarrinhoService } from '../../carrinho.service';
import { Component} from '@angular/core';
import { Produtos } from 'src/app/produtos';
@Component({
  selector: 'app-sacola-cheia',
  templateUrl: './sacola-cheia.component.html',
  styleUrls: ['./sacola-cheia.component.css']
})
export class SacolaCheiaComponent{
  itensNoCarrinho: any[] = [];
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
    this.itensNoCarrinho = this._carrinhoService.itensNoCarrinho;
  } 
  calcularSubtotal(){
    let subtotal = 0
    for(const produto of this.itensNoCarrinho){
      subtotal += produto.price
    }
    return subtotal
  }
}

