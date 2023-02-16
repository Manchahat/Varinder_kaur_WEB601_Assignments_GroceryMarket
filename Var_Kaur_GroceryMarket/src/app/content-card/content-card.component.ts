import { Component,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';
import { NgModule } from '@angular/core';
 
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],

  })

 
export class ContentCardComponent {
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;  
  @Input() selectedType: any = '';
  @Input() content: Content | undefined;
  @Input() selectedTittle: any='';
  @Input() noimage: any='https://st3.depositphotos.com/1322515/35964/v/450/depositphotos_359648638-stock-illustration-image-available-icon.jpg';
 

	titledetail(content?: Content) {
			this.selectedType=content?.type;

		if (!content) return console.log('No content');

		
		console.log("ID " + content.id + ": " + content.title);
	}

	ngOnInit(){
  }

	

	
}
