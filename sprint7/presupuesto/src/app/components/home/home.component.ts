import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //array precio productos
  prices:number[]=[];
  sumPrices:number = 0;
  totalProducts:number[]=[]
  subt:number =0;
  
  page:number = 0;
  language:number =0;



  //products info
  products:Product[] = [
    {
      name: 'Una pàgina Web (500€)',
      price: 500,
      select:false 
    },
    {
      name: 'Una consultoria SEO (300€)',
      price: 300,
      select:false 
    },
    {
      name: 'Una campanya de Google Ads (200€)',
      price: 200,
      select:false 
    },
  ];

  constructor(
    private _priceService: PriceService
  ) { }

  ngOnInit(): void {
  }

  priceProducts(){
    for(let i=0;i<this.products.length; i++){
      if(this.products[i].select){
        this.prices[i] = this.products[i].price;
      }else{
        this.prices[i]=0;
      }
    }
    this.sumPrices = this._priceService.sum(this.prices);
    this.refresh();

  }
  
  getDataPanell(parameters:any){

    this.page = parameters.page;
    this.language = parameters.language;
    
    this.subt = this._priceService.getSubtotal(this.page) + this._priceService.getSubtotal(this.language);
    console.log(this.subt);
    this.refresh();



  }

  //refrescando precio
  refresh(){
    if(this.products[0].select){
      this.prices[3]= this.subt;
      this.sumPrices = this._priceService.sum(this.prices);
    }else{
      this.subt =0;
      this.sumPrices = this._priceService.sum(this.prices);
    }

  }

}
