import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchedStockName:String  ): any[] {//in place of any there was IStockDetails
    if(value.length === 0 || searchedStockName === ''){
      return value;
    }
    const result = [];
    for (const item of value) {
      if(item.stockName.toLocaleLowerCase().match(searchedStockName.toLocaleLowerCase())){
        result.push(item)
      }
    }
    return result;
  }
}
