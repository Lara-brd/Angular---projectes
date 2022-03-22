import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/app/services/ship.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name:string = '';
  authOk:boolean = false;

  constructor( 
    private _shipService:ShipService,
    private _authService:AuthService
    ) {
      this._authService.getUser().subscribe(us => {
        this.name = us.name;
        this.authOk = us.ok;
      })

    }

  ngOnInit(): void {
  }

  resetPage(){
    this._shipService.setPage(1);
  }

}
