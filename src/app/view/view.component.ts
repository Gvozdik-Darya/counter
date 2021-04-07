import { Component, Input, OnInit } from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public counter: any;
  constructor(value: CounterService) {
    this.counter = value;
  }

  ngOnInit(): void {
    this.counter = this.counter.getValueCounter();
  }
}
