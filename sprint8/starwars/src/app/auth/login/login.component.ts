import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private info:Auth [] =[];
  username:string ='';
  password:string ='';
  authOk:boolean = false;


  constructor(
              private modal:NgbModal,
              private _authService:AuthService
              ) { }

  ngOnInit(): void {
  }

  openMD(contenido:any){
    this.modal.open(contenido,{size: 'md'} )
  }

  test(){
    this.info = this._authService.getSigninInf() || [];
    this.info.forEach((user) => {
      if(this.username == user.name  && this.password == user.password) {
        let user = {
          name:this.username,
          ok:true,
        }
        this._authService.addUser(user);
      }else{
        this.authOk = false;
      }
    });
    this.modal.dismissAll();
  }


}
