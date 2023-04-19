import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/messageservice';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-contentdetail',
  templateUrl: './contentdetail.component.html',
  styleUrls: ['./contentdetail.component.scss']
})
export class ContentdetailComponent  {
 
  id: number = 0;
	content: Content | undefined = undefined;
	defaultImageUrl =
		'https://www.iso.org/obp/graphics/grs/d3451786-46c2-41c9-b8ff-10a4f4840f07_200.png';  
    constructor(
      private route: ActivatedRoute,
      private contentService: ProductService,
      private messageService: MessageService
    )  { }

    ngOnInit() {
      this.route.paramMap.subscribe((params) => {
        this.id = Number(params.get('id') ?? 0);
        this.contentService.productbyId(this.id).subscribe((content: Content | undefined) => {
          this.content = content;
        });
        this.messageService.add(`Retrieved: Product ID ${this?.content?.id} with title ${this?.content?.title}`);
      });
    }
}
