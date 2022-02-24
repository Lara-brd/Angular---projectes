import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';


@Component({
  selector: 'app-list-budget',
  templateUrl: './list-budget.component.html',
  styleUrls: ['./list-budget.component.scss']
})
export class ListBudgetComponent implements OnInit {
  budgets:any[]=[];


  constructor(private _priceService: PriceService) { }

  ngOnInit(): void {
    this.budgets = this._priceService.getBudget();

  }
  getList(){
    console.log(this._priceService.getBudget())
  }


}
