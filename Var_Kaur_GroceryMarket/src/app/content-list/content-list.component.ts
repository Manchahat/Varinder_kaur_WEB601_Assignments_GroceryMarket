import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/ProductService';
import { Content } from '../helper-files/content-interface';
import { FindContent } from '../helper-files/find-content-interface';
import { MessageService } from '../services/messageservice';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: Content[] = [];
   
  Searchlist: FindContent | null = null;

  searchFormcontent: FindContent = {
    title: '',
  };
	constructor(private ProductService: ProductService, private messageService: MessageService) {}
  ngOnInit() {
    this.ProductService.getProduct().subscribe((productList) => {
      this.messageService.add('Content array loaded!');
		return (this.contentList = productList);
    });
  }

  Searchproduct() {
    this.Searchlist = { ...this.searchFormcontent };
  }

}
