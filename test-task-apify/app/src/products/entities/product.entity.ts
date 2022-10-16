export class Product {
    id:String
    name:string
    price:number
    constructor({name,price}) {
        this.name=name;
        this.price=price
        this.id=new Date().toString()
    }
}
