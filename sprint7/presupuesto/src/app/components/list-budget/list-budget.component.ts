import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-budget',
  templateUrl: './list-budget.component.html',
  styleUrls: ['./list-budget.component.scss']
})
export class ListBudgetComponent implements OnInit {
  budgets:any[]=[];
  budgets2:any[]=[];

  hippo = faSync;
  clock = faClock;
  search = faSearch;

  filterList = '';
  constructor(private _priceService: PriceService) { }

  ngOnInit(): void {
    this.budgets = this._priceService.getBudget();
    this.budgets2 = this._priceService.getBudget2();

  }


  // ordenando alfabeticamente
  sortBudget(){
      this.budgets.sort(function(a:any, b:any):number{
      const budgetA = a.budgetName.toLowerCase();
      const budgetB = b.budgetName.toLowerCase();
      if(budgetA < budgetB){
        return -1
      }
      if(budgetA > budgetB){
        return 1
      }
      return 0
    })
    console.log(this.budgets)
  }


  resetArray(){
    console.log(this.budgets2);
    this.budgets = this.budgets2;
    return this.budgets
  }


//Ordenando por fecha y hora
  sortTime(){
    return this.budgets.sort((a,b)=>{
      return <any>new Date (b.date) - <any> new Date(a.date)
    });
  }



}
