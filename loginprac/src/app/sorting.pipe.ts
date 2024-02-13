import { Pipe, PipeTransform } from '@angular/core';

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
}
