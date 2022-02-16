import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  products:Product [] = [];

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
