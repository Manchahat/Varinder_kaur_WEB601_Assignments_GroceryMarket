import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { FindContent } from '../helper-files/find-content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  public contentList: Content[] = [
    {
      id: 1,
      title: 'Drinks',
      description: 'Every type of soft drinks',
      creator: 'Grocery Market',
      imgURL: '',
      type: 'Grocery',
      tags: ['Soft drinks', 'juices']
    },
    {
      id: 2,
      title: 'Snacks',
      description: 'Diffrent types of Snacks',
      creator: 'Grocery Market',
      imgURL: 'https://i.etsystatic.com/21384881/r/il/439ca2/3769574767/il_1588xN.3769574767_ck9a.jpg',
      type: 'Grocery',
      tags: ['Eatables', 'Crunchy']
    },
    {
      id: 3,
      title: 'Vegetables',
      description: 'Fresh and Reasonable price',
      creator: 'Grocery Market',
      imgURL: 'https://m.media-amazon.com/images/I/61jpDWkdEoL._AC_SX679_.jpg',
      type: 'Grocery',
      tags: ['Green', 'Frozen']
    },
    {
      id: 4,
      title: ' Dove Shampoo',
      description: 'Reduce  Hair Fall',
      creator: 'Cosmetic Market',
      imgURL: 'https://m.media-amazon.com/images/I/61OERxg6W1L._AC_SX679_.jpg',
      type: 'Cosmetic',
      tags: ['small packing', 'Large packing'],
      isSelected: false
    },
    {
      id: 5,
      title: 'Chicken and Meat',
      description: 'Packaged',
      creator: 'Meat Market',
      imgURL: 'https://cdn.shopify.com/s/files/1/0520/1543/1841/products/Fresh-Halal-Chicken-Boneless-Roaster-Breasts-Protein-Fresh-Fresh-Halal-Chicken-Boneless-Roaster-Breasts-Protein-Fresh-Fresh-Halal-Chicken-Boneless-Roaster-Breasts-Protein-Fresh-Fresh_bb9dd17e-257c-4b8b-85b3-cc9736defba7_700x.jpg?v=1671159852',

      tags: ['Bacon', 'Sausages']
    },
    {
      id: 6,
      title: 'Nail, Paint Powder',
      description: 'Every Brand is available and full of quality',
      creator: 'Cosmetic Market',
      imgURL: 'https://www.gosupps.com/media/catalog/product/7/1/71Axd0y3QXL.jpg',
      type: 'Cosmetic',
      tags: ['Make-up', 'Acessories']
    },

    {
      id: 7,
      title: 'Boneless Chicken',
      description: 'Every Brand is available and full of quality',
      creator: 'Meat Market',
      imgURL: '',

      tags: ['chicken', 'meat'],
      isSelected: false


    },

  ];
  Searchlist: FindContent | null = null;

  searchFormcontent: FindContent = {
    title: '',
  };

  ngOnInit() {

  }

  Searchproduct() {
    this.Searchlist = { ...this.searchFormcontent };
  }

}
