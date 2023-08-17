import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Produtos } from 'src/app/produtos';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  @Input() anuncio: Produtos | null = null;
  indiceProdutoSelecionado: number = 0;

  constructor(private _carrinhoService: CarrinhoService){
    this._carrinhoService.indiceProdutoSelecionado$.subscribe((indice) => {
      this.indiceProdutoSelecionado = indice;
    });

  }
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

  mudarBotaoCor(cor:string){
    this.corSelecionada = true

    const botoesCores = document.querySelectorAll('.color') as NodeListOf<HTMLButtonElement>

    botoesCores.forEach(botao => {
      botao.classList.remove('color-s')
    })

    const botaoCor = document.querySelector(`button[value="${cor}"]`) as HTMLButtonElement
    botaoCor.classList.add('color-s')
  }

  mudarCorBotaoMedida(tamanho: string) {
    const botoesMedida = document.querySelectorAll('.sizes') as NodeListOf<HTMLButtonElement>;
    
    botoesMedida.forEach(botao => {
      botao.classList.remove('selected');
    }); //faz com que so um botao seja selecionado

    const botaoMedida = document.querySelector(`button[value="${tamanho}"]`) as HTMLButtonElement;
    botaoMedida.classList.add('selected');
    this.medidaSelecionada = true
  }
  sacolaAberta = false;

  corSelecionada = false
  medidaSelecionada = false
  contemItens = false

  comprarProduto(){
    if(this.corSelecionada && this.medidaSelecionada){
      this._carrinhoService.mostrarCarrinho = true
    }
  }
}
