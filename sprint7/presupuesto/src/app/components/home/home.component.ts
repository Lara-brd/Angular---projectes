import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PrecioService } from 'src/app/servicios/precio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  pagina:number;
  idioma:number;
  subtotal:number;
  totalProduct:number [] = [0,0,0];

  productPrice:number;
  finalPrice:number;

  //array con los productos
  products:Product [] = [
    {
      name:'Una pàgina Web (500€)',
      price:500,
      checked:false
    },
    {
      name:'Una consultoria SEO (300€)',
      price:300,
      checked:false
    },
    {
      name:'Una campanya de Google Ads(200€)',
      price:200,
      checked:false
    }
  ];

  constructor(
    private precioServicio:PrecioService,
  ){
    this.pagina = 1;
    this.idioma = 1;
    this.precioServicio.budget = this.productPrice;
  }

  
  ngOnInit(): void {
  }


  getTotal(){
    //bucle que actualiza el precio de los productos según estan seleccionados o no guardándolos en una array. 
    for(let i =0; i<this.products.length; i++){
      if(this.products[i].checked){
      this.totalProduct[i] = this.products[i].price;
      }else{
      this.totalProduct[i] = 0;
      }
    }

    //cálculo del precio total
    this.productPrice = this.precioServicio.calcPrice(this.totalProduct);
    this.finalPrice = this.refresh();
  }

  //recibiendo outputs
  getPagina(num:number){
    this.pagina = num;
    this.subtotal = this.precioServicio.calcSubtotal(this.pagina, this.idioma);
    this.finalPrice = this.refresh();
  }
  getIdioma(num:number){
    this.idioma = num;
    this.subtotal = this.precioServicio.calcSubtotal(this.pagina, this.idioma);
    this.finalPrice = this.refresh();

  }

  refresh(){
    let result = 0;
    if(this.subtotal == null || this.products[0].checked == false){
      //reseteo subtotal
      this.subtotal =0;
      result = this.finalPrice = this.productPrice;
    }else{
      result = this.finalPrice = this.productPrice + this.subtotal;
    }
    return result;
  }
}




