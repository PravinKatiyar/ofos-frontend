import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search){
      //length of search character should be greater than -1
      return search.restaurantName.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
    })
  }

}
