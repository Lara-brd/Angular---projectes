import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from 'src/app/interfaces/auth.interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  signup:Auth = {
    name : '',
    surname: '',
    password:''
  }
  signups:Auth[] = [];

  constructor(private modal:NgbModal ) { }

  ngOnInit(): void {

  }

  openMD(contenido:any){
    this.modal.open(contenido, {size:'md'});
  }



  //mandando info signin a local storage

  addSign(){
    this.signups.unshift(this.signup);
    localStorage.setItem('signin', JSON.stringify(this.signups));
    this.signup = {

      name : '',
      surname: '',
      password:''
    }
    this.modal.dismissAll();
  }


}
