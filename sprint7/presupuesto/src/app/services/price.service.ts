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
    total:0,
    date:0
  }

  budgetsArr:Budget[]=[];
  budgetsArr2:Budget[]=[];
  
  


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
    this.budget.date = this.currentDate();
    this.addingInfoToBudget()
    this.resetBudget();
  }

  resetBudget(){
    this.budget = {
      budgetName:"",
      clientName: "",
      products:[],
      page:0,
      language:0,
      total:0,
      date:0,
    }
  }

  getBudget(){
    return this.budgetsArr;
  }

  getBudget2(){
    return this.budgetsArr2;
  }

  currentDate(){
    //recogiendo fecha
    let d = new Date();
    let hora = d.getHours();
    let minutes = d.getMinutes();
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let seconds = d.getSeconds();

    return year + '-' + month + '-' + day+ '  ' + hora+ ':' + minutes +': '+ seconds;

  }

  //añadiendo info a budgetarr
  addingInfoToBudget(){
    if(this.budget.total != 0 && this.budget.budgetName != '' && this.budget.clientName != ''){
      this.budgetsArr.push(this.budget);
      this.budgetsArr2.push(this.budget);
    }
    console.log(this.budgetsArr);
  }

  
}
