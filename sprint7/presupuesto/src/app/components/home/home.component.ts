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

  //cada opción seleccionada corresponde la precio de su producto, si está deseleccionada este es 0
  priceProducts(){
    for(let i=0;i<this.products.length; i++){
      if(this.products[i].select){
        this.prices[i] = this.products[i].price;
      }else{
        this.prices[i]=0;
      }
    }
    this.refresh();
  }
  

  //Recibo parámetros de PANELL - calculo subtotal - refesco total.
  getDataPanell(parameters:any){
    this.page = parameters.page;
    this.language = parameters.language;
    
    this.subt = this._priceService.getSubtotal(this.page) + this._priceService.getSubtotal(this.language);

    this.refresh();
  }

  


  //Métdodo para refrescar precio
  refresh(){
    if(this.products[0].select){
      this.prices[3]= this.subt;
      this.sumPrices = this._priceService.sum(this.prices);
    }else{
      //si opción web no está seleccionada reseteo el precio del subtotal
      this.subt =0;
      this.prices[3]= 0;
      this.sumPrices = this._priceService.sum(this.prices);
    }
  }
}
