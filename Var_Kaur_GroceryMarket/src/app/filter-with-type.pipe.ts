import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterWithType'
})
export class FilterWithTypePipe implements PipeTransform {

  transform(contentList: Content[], type?: string): Content[] {
		if (type == null) return contentList.filter((item) => item.type == null);;
 
		return contentList.filter((item) => item.type == type);
	}

}
