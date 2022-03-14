import { Component, OnInit } from '@angular/core';
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

  //obteniendo lista naves de API y llevandolas a service
  getShips(){
    this._shipService.getAllShips().subscribe(data =>{
      let ships = data.results;
      this._shipService.refreshShips(ships);
    });
  }

}
