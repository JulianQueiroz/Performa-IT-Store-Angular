export class Produtos {
    id:number;
    image:string;
    name:string;
    oldPrice:number;
    price:number;
    parcelas:string;

    constructor(id:number,image:string,name:string, oldPrice:number,price:number,parcelas:string){
        this.id = id
        this.image=image
        this.name = name
        this.oldPrice = oldPrice
        this.price = price
        this.parcelas = parcelas
    }
}
