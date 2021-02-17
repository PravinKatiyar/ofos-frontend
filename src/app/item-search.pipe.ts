import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search){
      //length of search character should be greater than -1
      return search.itemName.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
    })
  }

}
