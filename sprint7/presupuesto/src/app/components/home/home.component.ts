import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  

  activo1:boolean = false
  activo2:boolean = false;
  activo3:boolean = false;

  price1 = 0;
  price2 = 0;
  price3 = 0;
  finalPrice = 0;

  totalPrice:Array<number> = [];

  constructor() {
  }
  
  ngOnInit(): void {
  }

  price(){
    //Asignando precio dependiendo de la seleccion
    if(this.activo1) this.price1 = 500; else this.price1 = 0;
    if(this.activo2) this.price2 = 300; else this.price2 = 0;
    if(this.activo3)this.price3 = 200; else this.price3 = 0;

    //sumar y añadir precio total al array
    let total = this.price1 + this.price2 + this.price3;
    this.totalPrice.push(total);
    //Introducir el último resultado del array en una variable
    this.finalPrice = this.totalPrice [this.totalPrice.length-1]
  }
}




