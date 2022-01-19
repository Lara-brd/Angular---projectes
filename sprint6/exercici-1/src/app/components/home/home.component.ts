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

  constructor() {
    this.name = "lara";
    this.frases = [
      new Frase (  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", ""),
      new Frase ( "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", ""),
      new Frase ( "L'heroi va decidir travessar la porta que el portava a casa", ""),
      new Frase ( "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", ""),
    ]
  }

  ngOnInit(): void {
  }

}
