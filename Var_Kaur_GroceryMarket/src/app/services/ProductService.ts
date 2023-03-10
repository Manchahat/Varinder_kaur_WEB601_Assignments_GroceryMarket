import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDB';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor() {}

	getProduct(): Observable<Content[]> {
		return of(contentList);
	}
	productbyId(id: number): Observable<Content | undefined> {
		const productList = contentList.find((item) => {
			return item.id === id;
		});
		return of(productList);
	}

	 
}
