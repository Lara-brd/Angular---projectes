import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ShipsTemplate } from '../interfaces/ship';


@Injectable({
  providedIn: 'root'
})
export class ShipService {
  api:string;
  listShips:any[];
  private ships$ = new Subject<any>();
  page:number = 1;


  constructor( private http:HttpClient) { 
    this.api = 'https://swapi.dev/api/';
    this.listShips = [];
  }

  //petición datos API nave
  getAllShips(page:number):Observable<any>{
    const PATH = this.api +'starships/?page='+ page;
    return this.http.get<ShipsTemplate[]>(PATH);
  }


  getIdFromUrl(url:any){
    let regex = /(\d+)/g;
    return + url.substring(url.length -4).match(regex);
  }

  setPage(newPage:number){
    this.page = newPage;
    console.log('from service' + this.page)
  }



}
