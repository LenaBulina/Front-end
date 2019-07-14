import {Component, Input, OnInit} from '@angular/core';
import {Notebook} from '../app.component';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {
  @Input() notebooks: Notebook[] = [];

  search: string[];

  constructor() {
    this.search = [];
  }

  ngOnInit() {
  }

  OnCheck(value: string, checked: boolean) {
  if (checked === true) {
    this.search.push(value);
  } else {
    const index = this.search.indexOf(value);
    this.search.splice(index, 1);
  }

  }
}
