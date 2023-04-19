import { Component,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
 
})

 
export class ContentCardComponent {
  @Input() isFirst: boolean = false;
  @Input() selectedType: any = '';
  @Input() content: Content | undefined;
  @Input() selectedTittle: any='';
  @Input() noimage: any='https://www.iso.org/obp/graphics/grs/d3451786-46c2-41c9-b8ff-10a4f4840f07_200.png';
  @Input() isShadow:boolean = false;
  constructor(private router: Router) {}
	titledetail(content?: Content) {
			this.selectedType=content?.type;

		if (!content) return console.log('No content');

		
		console.log("ID " + content.id + ": " + content.title);
	}
  ProductDetail(id?: any) {
		this.router.navigate(['/detail', id]);
	}
	ngOnInit(){
  }

	

	
}
