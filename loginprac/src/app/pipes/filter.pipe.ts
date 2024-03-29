import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],SearchText:string) {
    if(!value) {
      return []
    }
    if (!SearchText) {
      return value
    }
    SearchText=SearchText.toLowerCase();
     return value.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(SearchText)
     })
  }
}
