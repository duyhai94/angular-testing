import { NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'filterByKey'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(data: Array<any>, key: string,keysearch:string) {
    if(!key) return data;
    let result = [...data];
    result = data.filter(x=>x[keysearch] == key);
    return result;
  }
}