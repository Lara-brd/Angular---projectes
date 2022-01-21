import { Component, OnInit } from '@angular/core';
import { Frase } from '../../models/frase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public name:string;
  public frases: Frase [];
  public startHistory: Boolean;

  constructor() {
    this.name = "lara";
    this.frases = [
      {sentence: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", image:"../../../assets/img/1.jpg"},
      {sentence:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes." , image: "../../../assets/img/2.jpg"},
      {sentence: "L'heroi va decidir travessar la porta que el portava a casa", image:"../../../assets/img/3.jpg"},
      {sentence: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", image:"../../../assets/img/4.jpg"}
    ]
    this.startHistory = false;
  }

  ngOnInit(): void {
  }

  start(){
    this.startHistory = true;;
    console.log(this.startHistory)
  }

}
