import { Component, OnInit } from '@angular/core';
import { map, share, shareReplay, Subject, tap } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-multicasting-operators-page',
  templateUrl: './multicasting-operators-page.component.html',
  styleUrls: ['./multicasting-operators-page.component.scss'],
})
export class MulticastingOperatorsPageComponent implements OnInit {
  multicast$ = new Subject();
  obsA$ = this.multicast$.asObservable().pipe(
    map(() => 'A' + this.obsAResult.length),
    tap((value) => {
      this.loggingService.addLog('Tap', value);
      this.obsAResult.push(value);
    }),
    share()
  );
  obsAResult = [];

  multicastReplay$ = new Subject();
  obsB$ = this.multicastReplay$.asObservable().pipe(
    map(() => 'B' + this.obsAResult.length),
    tap((value) => {
      this.loggingService.addLog('Tap', value);
      this.obsAResult.push(value);
    }),
    shareReplay(1)
  );
  obsBResult = [];

  showLateSubscriber = false;

  constructor(private readonly loggingService: LoggingService) {}

  ngOnInit(): void {}
}
