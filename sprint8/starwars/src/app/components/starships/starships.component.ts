import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  ships:Ship[] = [];

  constructor(private _shipService:ShipService) { }

  ngOnInit(): void {
    this._shipService.getShips$().subscribe(ships => {
      this.ships = ships;
      
    });
  }

}
