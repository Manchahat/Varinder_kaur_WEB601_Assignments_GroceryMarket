import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDB';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor(private http: HttpClient) {}

	private httpOptions = {
		headers: new HttpHeaders({ 'Content-type': 'application/json' }),
	};


	getProduct(): Observable<Content[]> {
		// return of(contentList);
		return this.http.get<Content[]>('api/content');
	}
	productbyId(id: number): Observable<Content | undefined> {
		const productList = contentList.find((item) => {
			return item.id === id;
		});
		
		return of(productList);
	}

	addContent(newContentItem: Content): Observable<Content> {
		return this.http.post<Content>('api/content', newContentItem, this.httpOptions);
	}
}
