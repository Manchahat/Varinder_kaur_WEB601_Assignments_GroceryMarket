import { Content } from "./content-interface";


export class ContentList {
  static ContentCount = 0;
  private _items: Content[];
  constructor() {
    this._items = []; // initialize array
   // this._items[0] = item; // set the value of the item at the first index of the array
   //this.increaseCount();
  }
  get items():Content[] {
    return this._items;
  }
  contentlengh(){
    return this.items.length;
  }
  addcontent(Content: any) {
     
    this._items.push (Content);

  }
  printProperties(index: number): string {
    if (this._items.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-wrapper">
              <h1>${this._items[index].title}</h1>
              <p>${this._items[index].description}</p>
              <h6>${this._items[index].creator}</h6>
              <img src="${this._items[index].imagelink}">
              <div>${this._items[index].type}</div>
            </div>`;
  }
}

