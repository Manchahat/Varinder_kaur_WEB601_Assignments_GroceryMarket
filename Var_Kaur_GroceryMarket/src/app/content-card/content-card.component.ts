import { Component,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() isFirst: boolean = false;
  @Input() selectedType: any = '';
  @Input() content: Content | undefined;
  @Input() selectedTittle: any='';

	titledetail(content?: Content) {
			this.selectedType=content?.type;
		if (!content) return console.log('No content');

		
		console.log("ID " + content.id + ": " + content.title);
	}

	ngOnInit(){

	}

	

	
}
