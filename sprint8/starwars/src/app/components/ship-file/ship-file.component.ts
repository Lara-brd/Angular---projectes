import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-file',
  templateUrl: './ship-file.component.html',
  styleUrls: ['./ship-file.component.scss']
})
export class ShipFileComponent implements OnInit {
  ships:Ship [] = [];

  constructor( private _shipService:ShipService) { }

  ngOnInit(): void {
    this._shipService.getShips$().subscribe(ships => {
      this.ships = ships;
    });
  }
}
