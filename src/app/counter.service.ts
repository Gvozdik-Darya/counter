import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = 0;
  constructor() { }
  public getValueCounter(): number {
    return this.counter;
  }
}
