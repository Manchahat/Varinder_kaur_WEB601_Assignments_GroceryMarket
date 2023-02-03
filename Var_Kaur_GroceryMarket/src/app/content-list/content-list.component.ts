import {  Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
  
})
export class ContentListComponent {
  public contentData: Content[] = [
    { id: 1, title: 'Drinks', description: 'Every type of soft drinks', creator: 'Grocery Market', imgURL: 'https://m.media-amazon.com/images/I/81pAlAAXUvL.jpg', type: 'Grocery Item', tags: ['Soft drinks', 'juices'] },
    { id: 2, title: 'Snacks', description: 'Diffrent types of Snacks', creator: 'Grocery Market', imgURL: 'https://i.etsystatic.com/21384881/r/il/439ca2/3769574767/il_1588xN.3769574767_ck9a.jpg', type: 'Grocery Item', tags: ['Eatables', 'Crunchy'] },
    { id: 3, title: 'Vegetables', description: 'Fresh and Reasonable price', creator: 'Grocery Market', imgURL: 'https://m.media-amazon.com/images/I/61jpDWkdEoL._AC_SX679_.jpg', type: 'Grocery Item', tags: ['Green', 'Frozen'] },
    { id: 4, title: ' Dove Shampoo', description: 'Reduce  Hair Fall', creator: 'Grocery Market', imgURL: 'https://m.media-amazon.com/images/I/61OERxg6W1L._AC_SX679_.jpg', type: 'Grocery Item', tags: ['small packing', 'Large packing'] },
    { id: 5, title: 'Chicken and Meat', description: 'Packaged', creator: 'Grocery Market', imgURL: 'https://cdn.shopify.com/s/files/1/0520/1543/1841/products/Fresh-Halal-Chicken-Boneless-Roaster-Breasts-Protein-Fresh-Fresh-Halal-Chicken-Boneless-Roaster-Breasts-Protein-Fresh-Fresh-Halal-Chicken-Boneless-Roaster-Breasts-Protein-Fresh-Fresh_bb9dd17e-257c-4b8b-85b3-cc9736defba7_700x.jpg?v=1671159852', type: 'Grocery Item', tags: ['Bacon', 'Sausages'] },
    { id: 6, title: 'Cosmetics', description: 'Every Brand is available and full of quality', creator: 'Grocery Market', imgURL: 'https://www.gosupps.com/media/catalog/product/7/1/71Axd0y3QXL.jpg', type: 'Grocery Item', tags: ['Tag 11', 'Tag 12'] },
  ];
  constructor() { }

  ngOnInit() {
  }
}
