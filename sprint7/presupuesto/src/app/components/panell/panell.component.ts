import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-panell',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})
export class PanellComponent implements OnInit {
  question = faQuestionCircle;
  @Output() pagLang = new EventEmitter<any>();

  parametros = {
    page:0,
    language:0
  }

  constructor(private modal:NgbModal) {}
  formWeb = new FormGroup ({
    page: new FormControl(0, Validators.required),
    language: new FormControl(0,Validators.required )
  })

  ngOnInit(): void {
  }

  openLG(contenido:any){
    this.modal.open(contenido,{size:'lg'});
  }
  

  //validando form
  noValid(element:any){
    return element?.touched && element?.invalid 
  }


  //Mandando datos a HOME
  sendDataPanell(){
    this.parametros = {
      page: this.formWeb.get('page')?.value,
      language:this.formWeb.get('language')?.value
    }
    this.pagLang.emit(this.parametros);
  }

  //Botones incremento
  inc(event:any, item:any){
    if(event.target.id === 'incPage' || event.target.id === 'incLang'){
      item.value ++;
      item.setValue(item.value);
      this.sendDataPanell();
    }
  }

  dec(event:any, item:any){
    if(event.target.id === 'decPage' || event.target.id === 'decLang'){
      if(item.value >0){
        item.value --;
        item.setValue(item.value);
        this.sendDataPanell();
      }
    }

  }


///////////////////////////////////////


  // inc(event:any){
  //   if(event.target.id === 'incPage'){
  //     this.parametros.page ++;
  //     console.log('solo btn');
  //     this.formWeb.get('page')?.setValue(this.parametros.page);
  //     this.sendDataPanell()
  //   }

  // }
  
}




