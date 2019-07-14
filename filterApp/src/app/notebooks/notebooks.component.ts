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
  isChecked: boolean;

  constructor() {
    this.search = [];
    this.isChecked = false;
  }

  ngOnInit() {
  }

  OnCheck(value: string, checked: boolean) {
  if (checked === true) {
    this.search.push(value);
    console.log(this.search);
  } else {
    const index = this.search.indexOf(value);
    this.search.splice(index, 1)
    console.log(this.search);
  }

  }
}
