import { Component, OnInit } from '@angular/core';
import { defer, from, fromEvent, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-creation-operators-page',
  templateUrl: './creation-operators-page.component.html',
  styleUrls: ['./creation-operators-page.component.scss'],
})
export class CreationOperatorsPageComponent implements OnInit {
  of$ = of(1, 2, 3);
  from$ = from([1, 2, 3]);
  timer$ = timer(5000);
  interval$ = interval(5000);
  fromEvent$ = fromEvent(window, 'click');

  constructor() {}

  ngOnInit(): void {}
}
