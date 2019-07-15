import { Pipe, PipeTransform } from '@angular/core';
import {Notebook} from '../app.component';

@Pipe({
  name: 'filterByProcessor',
  pure: false
})
export class FilterByProcessorPipe implements PipeTransform {

  transform(notebooks: Notebook[], values: string[]): Notebook[] {
    if (values.length === 0) {
      return notebooks;
    }
    return notebooks.filter( notebook => values.includes(notebook.processor));
  }

}
