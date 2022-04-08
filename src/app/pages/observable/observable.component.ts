import { Component, OnInit } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  interval$ = interval(1000);
  intervalResult: number[] = [];
  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
  constructor() {}

  ngOnInit(): void {
    this.interval$.subscribe((el) => {
      console.log(el);
      this.intervalResult.push(el);
    });
  }
}
