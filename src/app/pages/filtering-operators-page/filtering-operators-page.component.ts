import { Component, OnInit } from '@angular/core';
import {
  auditTime,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  iif,
  interval,
  map,
  mergeMap,
  of,
  Subject,
  take,
  takeUntil,
  throttleTime,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-filtering-operators-page',
  templateUrl: './filtering-operators-page.component.html',
  styleUrls: ['./filtering-operators-page.component.scss'],
})
export class FilteringOperatorsPageComponent implements OnInit {
  //iff
  post$ = of('POST');
  put$ = of('PUT');
  saveEntity$ = new Subject();
  iff$ = this.saveEntity$.pipe(
    mergeMap((el: { id: string }) =>
      iif(
        () => {
          return el?.id != null;
        },
        this.put$,
        this.post$
      )
    )
  );
  //take
  takeSubject$ = new Subject();
  take$ = this.takeSubject$.pipe(take(3));
  //debounceTime
  debounceValue$ = new Subject();
  debounce$ = this.debounceValue$.pipe(debounceTime(1000));

  // distintUntilChanged
  dinstinctValue$ = new Subject();
  distinctUntilChanged$ = this.debounceValue$.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    map((el) => el + '-' + new Date().toISOString())
  );
  // filter
  filterSubject$ = new Subject();
  filter$ = this.filterSubject$.pipe(
    filter((el) => el !== null && el !== 'wrong value')
  );
  // takeUntil
  takeUntilSubject$ = new Subject();
  takeUntil$ = interval(2000).pipe(takeUntil(this.takeUntilSubject$));
  // auditTime, throhling time
  $auditTime = fromEvent(document, 'click').pipe(
    auditTime(5000),
    map((el) => el.timeStamp)
  );
  $throttleTime = fromEvent(document, 'click').pipe(
    throttleTime(5000),
    map((el) => el.timeStamp)
  );

  constructor() {}

  ngOnInit(): void {}

  generateRandom() {
    return Math.random();
  }

  debounceInputKeyUp(event) {
    this.debounceValue$.next(event.target.value);
  }

  dinstictInputKeyUp(event) {
    this.debounceValue$.next(event.target.value);
  }

  pushToFilterValue() {
    timer(1000).subscribe(() => this.filterSubject$.next(null));
    timer(2000).subscribe(() => this.filterSubject$.next('Some value'));
    timer(3000).subscribe(() => this.filterSubject$.next(null));
    timer(4000).subscribe(() => this.filterSubject$.next('wrong value'));
    timer(5000).subscribe(() => this.filterSubject$.next(null));
    timer(6000).subscribe(() => this.filterSubject$.next('Another value'));
  }
}
