import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})
export class PanellComponent implements OnInit {
  @Output() pagLang = new EventEmitter<any>();

  constructor() { }

  formWeb = new FormGroup ({
    page: new FormControl('', Validators.required),
    language: new FormControl('',Validators.required )
  })

  ngOnInit(): void {
  }

  //validando form
  noValid(element:any){
    return element?.touched && element?.invalid 
  }

  sendDataPanell(){
    const PARAMETROS = {
      page: this.formWeb.get('page')?.value,
      language:this.formWeb.get('language')?.value
    }
    this.pagLang.emit(PARAMETROS);
  }


}


