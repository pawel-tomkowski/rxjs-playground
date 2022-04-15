import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, Observable, share, tap, timer } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  observable$ = new Observable((subscriber) => {
    subscriber.next(Math.random());
    subscriber.next(Math.random());
    setTimeout(() => {
      subscriber.next(Math.random());
    }, 4000),
      setTimeout(() => {
        subscriber.next(Math.random());
        subscriber.complete();
      }, 8000);
  }).pipe(
    tap((el) => {
      this.loggingService.addLog('observable', el.toString());
    })
  );

  interval$ = interval(5000);

  source$ = fromEvent(document, 'click').pipe(
    map((el) => {
      return el.timeStamp;
    }),
    tap((el) => {
      this.loggingService.addLog('doc:click', el.toString());
    })
  );

  intervalResult: number[] = [];
  constructor(private readonly loggingService: LoggingService) {}

  ngOnInit(): void {
    const interval = 'interval' + Math.random().toFixed(2);
    this.interval$.subscribe((el) => {
      this.loggingService.addLog(interval, el.toString());
      this.intervalResult.push(el);
    });
  }
}
