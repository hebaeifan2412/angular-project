import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe',
  standalone: true
})
export class SearchpipePipe implements PipeTransform {
 
  transform(value: string, searchText: string): string {
    if (!searchText) return value;
  
    searchText = searchText.toLowerCase();
    const regex = new RegExp(`(${searchText})`, 'gi'); 
    const h = value.replace(regex, match => `<strong>${match}</strong>`); 
    return h;
  }
};

   

