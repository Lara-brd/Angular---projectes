export class Product{
  name:string;
  price:number;
  select:boolean;
  constructor(name:string, price:number, select:boolean){
    this.name = name;
    this.price = price;
    this.select = select;
  }
}