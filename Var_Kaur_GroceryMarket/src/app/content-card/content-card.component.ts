import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

const item1 : Content = {
  id:1,
    title:"Drinks and Beverages",
    description:"At the market, there are all types of drinks like coca-cole, pepsi, monster, apple juice and so on.. ",
    creator:"Varinder",
    type:"Grocery Market Card"
}

const item2 : Content = {
  id:2,
    title:"Eatables",
    description:"All eatables of daily need included frozen are available at the grocery store.",
    creator:"Varinder",
    type:"Grocery Market Card"
}

const item3 : Content = {
  id:3,
    title:"Meat and Bacon",
    description:"It is available in various varieties and with different size and weight. ",
    creator:"Varinder",
    type:"Grocery Market Card"
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent {
  
  groceryLists = new ContentList();

  ngOnInit () {
    this.groceryLists.addcontent(item1);
    this.groceryLists.addcontent(item2);
    this.groceryLists.addcontent(item3);
  }
}
