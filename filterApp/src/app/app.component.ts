import { Component } from '@angular/core';

export interface Notebook {
  id: number;
  producer: string;
  processor: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Ноутбуки';

  public notebooks: Notebook[] = [
    {id: 1, producer: 'Asus', processor: 'AMD', price: 17000 },
    {id: 2, producer: 'Acer', processor: 'AMD', price: 15000 },
    {id: 3, producer: 'Asus', processor: 'Intel', price: 14000 },
    {id: 4, producer: 'Acer', processor: 'Intel', price: 13000 },
    {id: 6, producer: 'Apple', processor: 'Intel', price: 25000 },
    {id: 7, producer: 'Apple', processor: 'Intel', price: 35000 }
    ]}
