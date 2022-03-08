import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ship } from '../interfaces/ship';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  api:string;
  private ships:Ship [];
  private ships$:Subject<Ship[]>;

  constructor( private http:HttpClient) { 
    this.api = 'https://swapi.dev/api/';
    this.ships = [];
    this.ships$ = new Subject();
  }

  //petición datos API
  getAllShips(){
    const PATH = this.api +'starships';
    return this.http.get<any>(PATH);
  }

  //add objetos y aviso a los subcriptores de los cambios
  addShip(ship:Ship){
    this.ships.push(ship);
    this.ships$.next(this.ships);
  }

  //subject private tengo que crear metodo para subscribirme
  getShips$():Observable<Ship[]>{
    return this.ships$.asObservable();
  }

  printShip(){
    console.log(this.ships);
  }


}
