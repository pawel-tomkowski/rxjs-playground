import { Component, OnInit } from '@angular/core';
import { catchError, map, of, Subject, tap } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-error-handling-operators-page',
  templateUrl: './error-handling-operators-page.component.html',
  styleUrls: ['./error-handling-operators-page.component.scss'],
})
export class ErrorHandlingOperatorsPageComponent implements OnInit {
  tapSubjectA$ = new Subject();
  obsA$ = this.tapSubjectA$.asObservable().pipe(
    map(() => 'A' + this.obsAResult.length),
    tap((value) => {
      this.loggingService.addLog('Tap', value);
      this.obsAResult.push(value);
      if (this.obsAResult.length % 5 === 0) {
        throw new Error('Unexpected error');
      }
    }),
    catchError((error) => {
      this.loggingService.addLog('Error: ', error);
      return of('Error');
    })
  );
  obsAResult = [];
  constructor(private readonly loggingService: LoggingService) {}

  ngOnInit(): void {}
}
