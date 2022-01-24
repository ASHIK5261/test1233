import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconUrl'
})
export class IconUrlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    return `https://developer.accuweather.com/sites/default/files/${(value)<10?'0'+value:value}-s.png`;
  }

}
