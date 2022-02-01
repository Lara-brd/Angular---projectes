import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})
export class PanellComponent implements OnInit {
  priceForm: FormGroup;

  constructor(
    private _builder:FormBuilder
  ) {
    this.priceForm = this. _builder.group({
      pagina: [null, Validators.required],
      idioma: [null, Validators.required]
    })
  }
  
  ngOnInit(): void {
  }


}
