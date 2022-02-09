import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {
  totalPrice:Array<number> = [];
  budget:number;
  

  constructor() {}

  calcPrice(arr:number[]){
    let result = arr.reduce((acc, item)=>{
      return acc = acc + item;
    },0)
    return result;
  }

  calcSubtotal(item1:number, item2:number){
    return item1 * item2 * 30;
  }


  // addPrice(price:number){
  //   this.totalPrice.push(price);
  // }

  // getFinalPrice(){
  //   return  this.totalPrice [this.totalPrice.length-1]
  // }

  // calcPrice(arr:number[]){
  //   let result = arr.reduce((acc, item)=>{
  //     return acc = acc+item;
  //   },0)
  //   return result
  // }



}
