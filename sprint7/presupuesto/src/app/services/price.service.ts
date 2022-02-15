import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  //suma de productos
  sum(arr:number[]){
    let result = arr.reduce((acc,item)=>{
      return acc = acc+item;
      }, 0);
    return result;
  }

  getSubtotal(item:number){
    return item * 30;
  }

}
