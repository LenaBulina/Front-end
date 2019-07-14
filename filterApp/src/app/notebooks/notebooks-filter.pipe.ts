import {Pipe, PipeTransform} from '@angular/core';
import {Notebook} from '../app.component';

@Pipe({
  name: 'notebooksFilter',
  pure: false
})
export class NotebooksFilterPipe  implements  PipeTransform {
  newNotebooks: Notebook[] = [];
  transform(notebooks: Notebook[], values: string[]): Notebook[] {
    if (values.length === 0) {
      return notebooks;
    }
    this.newNotebooks = notebooks.filter( notebook => values.includes(notebook.producer));
    console.log(this.newNotebooks);
    return this.newNotebooks;
  }

}
