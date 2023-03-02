import { Content } from './content-interface';

export interface FindContent {
	title?: string;
}

export interface FindResults {
	total: number;
	results: Content[];
}
