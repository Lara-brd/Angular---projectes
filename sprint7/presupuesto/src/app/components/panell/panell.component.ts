import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})
export class PanellComponent implements OnInit {
  @Output() paginaEv = new EventEmitter<number>();
  @Output() idiomaEv = new EventEmitter<number>();
  priceForm:FormGroup;

  constructor(
    private _builder:FormBuilder
  ){
    this.priceForm = this._builder.group({
      pagina: [null, Validators.required],
      idioma: [null, Validators.required]
    });
  }

  //validando form
  noValidoPag(){
    return this.priceForm.get('pagina')?.invalid && this.priceForm.get('pagina')?.touched
  }
  noValidoIdioma(){
    return this.priceForm.get('idioma')?.invalid && this.priceForm.get('idioma')?.touched
  }
  
  ngOnInit(): void {
  }

  //recibiendo valores de los inputs
  getPagina(){
    return this.priceForm.get('pagina')?.value;
  }
  getIdioma(){
    return this.priceForm.get('idioma')?.value;
  }

  //envio de datos a home
  sendPag(num:number){
    this.paginaEv.emit(num);
  }
  sendIdioma(num:number){
    this.idiomaEv.emit(num)
  }
}
