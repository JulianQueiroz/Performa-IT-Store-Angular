export class Produtos {
    id:number;
    image:string;
    name:string;
    oldPrice:number;
    price:number;
    parcelas:string;
    quantidade:number;

    constructor(id:number,image:string,name:string, oldPrice:number,price:number,parcelas:string,quantidade:number = 0){
        this.id = id
        this.image=image
        this.name = name
        this.oldPrice = oldPrice
        this.price = price
        this.parcelas = parcelas
        this.quantidade = quantidade
    }
}
