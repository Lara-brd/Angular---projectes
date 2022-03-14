import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Ship } from '../interfaces/ship';
@Injectable({
  providedIn: 'root'
})
export class ShipService {
  api:string;
  listShips:any[];
  private ships$ = new Subject<any>();





  constructor( private http:HttpClient) { 
    this.api = 'https://swapi.dev/api/';
    this.listShips = [];
  }

  //petición datos API nave
  getAllShips():Observable<any>{
    const PATH = this.api +'starships';
    return this.http.get<Ship[]>(PATH);
  }


  


  //observable primero avisamos del cambio y mandamos array luego método get para poder subscribirnos
  refreshShips(arr:any){
    this.listShips = arr;
    this.ships$.next(this.listShips);
  }
  getShips$():Observable<any>{
    return this.ships$.asObservable();
  }

  getIdFromUrl(url:any){
    let regex = /(\d+)/g;
    return + url.substring(url.length -4).match(regex);
  }





}
