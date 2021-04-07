import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ModelComponent } from './model/model.component';
import {CounterService} from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
