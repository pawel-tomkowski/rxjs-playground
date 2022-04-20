import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { buffer, bufferTime, delay, ReplaySubject, throttleTime } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';
@UntilDestroy()
@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss'],
})
export class SubjectPageComponent implements OnInit {
  subject$ = new Subject();
  subjectResults = [];
  subjectResultsSecond = [];

  behaviourSubject$ = new BehaviorSubject(1);

  replaySubject$ = new ReplaySubject(10);
  replaySubjectResult = [];
  replaySubjectResultSecond = [];

  constructor(private readonly loggingService: LoggingService) {}

  ngOnInit(): void {
    this.initSubjectWithData();
    this.subscribeFirstTime();
    this.subscribeSecondTimeAfterSeconds(5);
  }

  private initSubjectWithData() {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        this.subject$.next(i);
        this.behaviourSubject$.next(i);
        this.replaySubject$.next(i);
      }, 1000 * i);
    }
  }

  private subscribeFirstTime() {
    this.replaySubject$.pipe(untilDestroyed(this)).subscribe((el) => {
      this.replaySubjectResult.push(el);
    });
    this.subject$.pipe(untilDestroyed(this)).subscribe((el) => {
      this.subjectResults.push(el);
    });
  }

  private subscribeSecondTimeAfterSeconds(seconds: number) {
    setTimeout(() => {
      this.replaySubject$.pipe(untilDestroyed(this)).subscribe((el) => {
        this.replaySubjectResultSecond.push(el);
      });
      this.subject$.pipe(untilDestroyed(this)).subscribe((el) => {
        this.subjectResultsSecond.push(el);
      });
    }, 1000 * seconds);
  }
}
