import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/messageservice';
import { ProductService } from './services/ProductService';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Var_Kaur_GroceryMarket';
  cardId:number=2;
  cardList: Content | undefined;
  

	constructor(private productservice: ProductService ,private messageService: MessageService) {
		this.searchCard();
	}


	searchCard(){
		//this.messageService.clear();
		this.productservice.productbyId(this.cardId).subscribe((product) => {
			this.cardList=product;
			if (this.cardList) {
				this.messageService.add(`Content Item at id: ${this.cardId}`);
				this.messageService.add('Content array loaded!');
			}else {
				this.messageService.add('card not found');
			}
			
	   });
		
	}
}
