import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipService } from 'src/app/services/ship.service';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  ships:any[] = [];
  id:string = '2';
  page:number;
  listCount = 0;
  counter =0;
  angleRight = faAngleDoubleRight;
  charged = false;
  

  constructor(
    private _shipService:ShipService,
    private router:Router,
    @Inject(DOCUMENT) private document: Document,
    ) {
    // this.page = this._shipService.page;
    this.page = this._shipService.page;
    this._shipService.getAllShips(this.page).subscribe(ships=> {
      this.listCount = ships.count;
      this.ships = ships.results;
      this.isCharged();
    });

  }

  ngOnInit(): void { 

  }


  // ///////////////////////////////////
  // @HostListener('window:scroll')
  // //metodo
  // onWindowScroll():void{
  //   console.log('Heeeey!!!')
  //   const yOffset = window.pageYOffset;
  //   const scrollTop = this.document.documentElement.scrollTop;

  // }



  getId(s:any){
    let n:number = this._shipService.getIdFromUrl(s);
    //recogiendo id para añadirlo a url
    this.router.navigate(['/starships/', n])
    return n;
  }




  next(){

    this.counter += 1
    let nextTimes = this.listCount/10;
    if(this.counter === Math.ceil(nextTimes)){
      this.page = 0;
    }
    this.page = this.page+1;
    this._shipService.setPage(this.page);
    this._shipService.getAllShips(this.page).subscribe(ships=> {
      this.ships = ships.results;
      this.isCharged();
    });
  }

  isCharged(){
    if(this.ships != null  || this.ships != undefined){
      this.charged = true;
    }
  }

}


