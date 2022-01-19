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
      new Frase (  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", "../../../assets/img/1.jpg"),
      new Frase ( "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", "../../../assets/img/2.jpg"),
      new Frase ( "L'heroi va decidir travessar la porta que el portava a casa", "../../../assets/img/3.jpg"),
      new Frase ( "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", "../../../assets/img/4.jpg"),
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
