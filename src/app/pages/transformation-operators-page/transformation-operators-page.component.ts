import { Component, OnInit } from '@angular/core';
import {
  bufferCount,
  bufferTime,
  concatMap,
  delay,
  interval,
  map,
  mergeMap,
  of,
  scan,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-transformation-operators-page',
  templateUrl: './transformation-operators-page.component.html',
  styleUrls: ['./transformation-operators-page.component.scss'],
})
export class TransformationOperatorsPageComponent implements OnInit {
  // map

  obsA$ = interval(2000).pipe(
    map((value) => 'A' + value * value),
    tap((value) => {
      this.obsAResult.push(value);
    })
  );
  obsAResult = [];

  // scan
  obsB$ = interval(2000);
  scan$ = this.obsB$.pipe(scan((acc, curr) => acc + curr, 0));
  // bufferTime
  obsC$ = interval(2000);
  bufferTime$ = this.obsC$.pipe(bufferTime(5000));
  bufferCount$ = this.obsC$.pipe(bufferCount(5));

  // switchMap
  subjectD$ = new Subject();
  subjectDResult = [];
  obsD$ = this.subjectD$.pipe(
    switchMap((value) => of('SwitchMap: ' + value).pipe(delay(3000)))
  );
  obsDResult = [];
  // mergeMap/flatMap

  subjectE$ = new Subject();
  subjectEResult = [];
  obsE$ = this.subjectE$.pipe(
    mergeMap((obj: { value; time }) =>
      of('MergeMap: ' + obj.value).pipe(delay(obj.time))
    )
  );
  obsEResult = [];
  // concatMap

  subjectF$ = new Subject();
  subjectFResult = [];
  obsF$ = this.subjectF$.pipe(
    concatMap((obj: { value; time }) =>
      of('ConcatMap: ' + obj.value).pipe(delay(obj.time))
    )
  );
  obsFResult = [];

  constructor() {}

  ngOnInit(): void {
    this.subjectD$.subscribe((d) => this.subjectDResult.push(d));
    this.obsD$.subscribe((d) => this.obsDResult.push(d));

    this.subjectE$.subscribe((d) => this.subjectEResult.push(d));
    this.obsE$.subscribe((d) => this.obsEResult.push(d));

    this.subjectF$.subscribe((d) => this.subjectFResult.push(d));
    this.obsF$.subscribe((d) => this.obsFResult.push(d));
  }
}
