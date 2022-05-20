import { Component, OnInit } from '@angular/core';
import {
  delay,
  fromEvent,
  map,
  mergeMap,
  of,
  share,
  takeUntil,
  tap,
} from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-utility-operators-page',
  templateUrl: './utility-operators-page.component.html',
  styleUrls: ['./utility-operators-page.component.scss'],
})
export class UtilityOperatorsPageComponent implements OnInit {
  tapSubjectA$ = new Subject();
  obsA$ = this.tapSubjectA$.asObservable().pipe(
    map(() => 'A' + this.obsAResult.length),
    tap((value) => {
      this.loggingService.addLog('Tap', value);
      this.obsAResult.push(value);
    }),
    share()
  );
  obsAResult = [];

  mousedown$ = fromEvent(document, 'mousedown');
  mouseup$ = fromEvent(document, 'mouseup');

  constructor(private readonly loggingService: LoggingService) {}

  ngOnInit(): void {
    this.mousedown$
      .pipe(
        mergeMap((event) =>
          of(event).pipe(delay(700), takeUntil(this.mouseup$))
        )
      )
      .subscribe((event) =>
        this.loggingService.addLog(
          'Long press',
          new Date().toLocaleTimeString()
        )
      );
  }
}
