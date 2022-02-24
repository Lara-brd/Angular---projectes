export class Product{
  static contains(arg0: string) {
    throw new Error('Method not implemented.');
  }
  name:string;
  price:number;
  select:boolean;
  constructor(name:string, price:number, select:boolean){
    this.name = name;
    this.price = price;
    this.select = select;
  }
}