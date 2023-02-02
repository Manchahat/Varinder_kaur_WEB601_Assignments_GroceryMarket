import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
@Input() contentCard:any;
@Input() cardIndex:number=0;
isfirst:boolean=false;

ngOnInit(){
  this.isfirst=this.cardIndex==0?true:false;
}

callConsole(contentCard:any){
  console.log(contentCard.id,contentCard.title);
}
}
