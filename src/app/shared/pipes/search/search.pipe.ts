import { Pipe, PipeTransform } from '@angular/core';
import { APP_PATH } from 'src/app/Main/constants/constants';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], type: string,searchText: string): any[] {
    if(type === APP_PATH.movies) {
        return value?.filter(obj => obj?.movie_name?.toLowerCase().includes(searchText.toLowerCase()));
    } else {
        return value?.filter(obj => obj.theatre_name?.toLowerCase().includes(searchText.toLowerCase()));
    }
  }

}
