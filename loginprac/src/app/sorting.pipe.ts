import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'sorting'
})

export class SortingPipe implements PipeTransform {
 transform(array:any,key:string,reverse:any) {
   if(!array && !reverse){
    return array;
   }
   const sortedArray=array.slice().sort((a:any,b:any)=>{
    const x=a[key]
    const y=b[key]
    if (typeof x==='string' && typeof y==='string') {
      return reverse ? y.localeCompare(x):x.localeCompare(y)
    }else{
      return reverse?(y-x):(x-y)
    }
   })
   return sortedArray;
 }
// transform(array:any,key:any,order:'asc'|'desc'='asc') {
//   if(!array)
//   return [];
//   return array.sort((a:any,b:any)=>{
//     if(order==='asc'){
//       return a[key]<b[key]?-1:1;
//     }else{
//       return b[key]<a[key]?-1:1
//     }
//   })
// }
}
