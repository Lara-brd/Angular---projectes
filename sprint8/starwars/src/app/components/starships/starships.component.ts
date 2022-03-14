import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  ships:any[] = [];
  id:string = '2';

  constructor(
    private _shipService:ShipService,
    private router:Router
    ) {
    this._shipService.getShips$().subscribe(ships=>{
      this.ships = ships;
    });
;
  }

  ngOnInit(): void { 
  }


  getId(s:any){
    console.log(s);
    let n:number = this._shipService.getIdFromUrl(s);
    console.log(n);
    this.router.navigate(['/starships/', n])

    
    return n;

  }

}


