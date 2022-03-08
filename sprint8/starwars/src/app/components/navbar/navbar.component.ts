import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private _shipService:ShipService) {

  }

  ngOnInit(): void {
  }

  getShips(){
    this._shipService.getAllShips().subscribe(tasks => {
      console.log(tasks);
      //obteniendo datos api
      for(let i=0; i< tasks.results.length; i++){
        //iterando por array result para obtener objetos y agregarlos al array ships
        const RESULT = tasks.results[i];
        const SHIP:Ship = {
          name:RESULT.name,
          model:RESULT.model,
          cost_in_credits:RESULT.cost_in_credits,
          atmosphering_speed:RESULT.max_atmosphering_speed,
          manufacturer:RESULT.manufacturer,
          length:RESULT.length,
          crew:RESULT.crew,
          url:RESULT.url
          

        }
        this._shipService.addShip(SHIP);
      }

    })

  }

}
