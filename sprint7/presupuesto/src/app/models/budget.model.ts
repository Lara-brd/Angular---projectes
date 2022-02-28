export class Budget {
  budgetName:string;
  clientName:string;
  products:string[];
  page:number;
  language:number;
  total:number;
  date:any;


  constructor(budgetName:string, clientName:string,products:any[], page:number, language:number, total:number, date:any){
    this.budgetName = budgetName;
    this.clientName = clientName;
    this.products = products;
    this.page = page;
    this.language = language;
    this.total = total;
    this.date = date;
  }  

}