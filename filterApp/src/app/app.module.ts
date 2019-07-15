import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import {NotebooksFilterPipe} from './notebooks/notebooks-filter.pipe';
import {FormsModule} from '@angular/forms';
import {FilterByProcessorPipe} from './notebooks/filter-by-processor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotebooksComponent,
    NotebooksFilterPipe,
    FilterByProcessorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
