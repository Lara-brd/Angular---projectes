import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.scss']
})
export class ShipInfoComponent implements OnInit {
  urlId:number = 0;
  ships:any[]=[];
  shipInfo = {
    name:'',
    model: '',
    cost_in_credits:'',
    max_atmosphering_speed:'',
    image:'',
    manufacturer:'',
    length:'',
    crew:''
  }

  constructor(
    private route:ActivatedRoute,
    private _shipService:ShipService
  ) {}
  

  ngOnInit(): void {
    //recojo id de la url
    this.route.paramMap.subscribe(params=>{
      this.urlId= +params.get('id')!;
    });
    console.log(this.urlId);
    this._shipService.getAllShips().subscribe(ship=>{
      console.log(ship.results)
      this.searchShip(ship);
      this.searchImage();


    });
  }


  //search ship by selected id
  searchShip(ship:any){
    for(let i =0; i< ship.results.length; i++){

      if(ship.results[i].url == 'https://swapi.dev/api/starships/'+this.urlId +'/'){
        this.shipInfo.name = ship.results[i].name;
        this.shipInfo.model = ship.results[i].model;
        this.shipInfo.cost_in_credits = ship.results[i].cost_in_credits;
        this.shipInfo.max_atmosphering_speed = ship.results[i].max_atmosphering_speed;
        this.shipInfo.manufacturer = ship.results[i].manufacturer;
        this.shipInfo.length = ship.results[i].length;
        this.shipInfo.crew = ship.results[i].crew;

      }
    } 
  }


  //get image
  searchImage(){
    this.shipInfo.image = 'https://starwars-visualguide.com/assets/img/starships/'+this.urlId+'.jpg';
  }




}
