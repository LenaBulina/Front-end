import {Component, Input, OnInit} from '@angular/core';
import {Notebook} from '../app.component';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {
  @Input() notebooks: Notebook[] = [];

  producerSearch: string[];
  processorSearch: string[];

  constructor() {
    this.producerSearch = [];
    this.processorSearch = [];
  }

  ngOnInit() {
  }

  OnCheckProducer(classname: string, value: string, checked: boolean) {
    if (classname === 'producer') {
      if (checked === true) {
        this.producerSearch.push(value);
      } else {
        const index = this.producerSearch.indexOf(value);
        this.producerSearch.splice(index, 1);  }
    }
  }

  OnCheckProcessor(classname: string, value: string, checked: boolean) {
    if (classname === 'processor') {
      if (checked === true) {
        this.processorSearch.push(value);
      } else {
        const index = this.processorSearch.indexOf(value);
        this.processorSearch.splice(index, 1);
      }
    }
  }
}
