import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  budget:Budget = {
    budgetName:"",
    clientName: "",
    products:[],
    page:0,
    language:0,
    total:0
  }

  budgetsArr:Budget[]=[];

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

  setBudget(budgetName:string, clientName:string, products:any[], page:number, language:number, total:number){
    this.budget.budgetName = budgetName;
    this.budget.clientName = clientName;
    this.budget.products = products;
    this.budget.page = page;
    this.budget.language = language;
    this.budget.total = total;
    this.budgetsArr.push(this.budget);
    console.log(this.budgetsArr);
    this.resetBudget();
  }

  resetBudget(){
    this.budget = {
      budgetName:"",
      clientName: "",
      products:[],
      page:0,
      language:0,
      total:0
    }
  }

  getBudget(){
    return this.budgetsArr;
  }
  
}
