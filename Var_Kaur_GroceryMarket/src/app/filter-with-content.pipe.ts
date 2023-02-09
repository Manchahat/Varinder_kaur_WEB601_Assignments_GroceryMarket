import { Pipe, PipeTransform } from '@angular/core';
 
import { Content } from './helper-files/content-interface';
import { FindContent, FindResults } from './helper-files/find-content-interface';

@Pipe({
  name: 'filterWithContent'
})

export class FilterWithContentPipe implements PipeTransform {

  transform(contentList: Content[], searchObject: FindContent | null): FindResults {
		if (searchObject == null) return { total: 0, results: [] };

		const filtered = contentList.filter((item) => {
			if (searchObject.title === '' || searchObject.title == null) return false;
			return item.title.toLowerCase().includes(searchObject.title.toLowerCase());
		});
		return { total: filtered.length, results: filtered };
	}

}
