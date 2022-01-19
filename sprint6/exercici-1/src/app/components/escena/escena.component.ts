import { Component,OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() public parentData:any;
  @Input() public fraseEscena:any;
  public currentSentence:number;

  constructor() {
  this.currentSentence = 0;
  }

  ngOnInit(): void {
    
  }

  next(){
    this.currentSentence++;
    this.currentSentence > 3 ? this.currentSentence = 0 : null;
  }
  
  prev(){
    this.currentSentence--;
    this.currentSentence < 0 ? this.currentSentence = 3 : null;
  }
  

}
