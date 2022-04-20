import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  concat,
  forkJoin,
  map,
  merge,
  pairwise,
  share,
  Subject,
  tap,
  withLatestFrom,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-combination-operators-page',
  templateUrl: './combination-operators-page.component.html',
  styleUrls: ['./combination-operators-page.component.scss'],
})
export class CombinationOperatorsPageComponent implements OnInit, OnDestroy {
  takeUntil$ = new Subject();
  //combineLatest
  combineLatestSubjectA$ = new Subject();
  obsA$ = this.combineLatestSubjectA$.asObservable().pipe(
    map(() => 'A' + this.obsAResult.length),
    tap((value) => {
      this.obsAResult.push(value);
    }),
    share()
  );
  obsAResult = [];

  combineLatestSubjectB$ = new Subject();
  obsB$ = this.combineLatestSubjectB$.asObservable().pipe(
    map(() => 'B' + this.obsBResult.length),
    tap((value) => {
      this.obsBResult.push(value);
    }),
    share()
  );
  obsBResult = [];
  combineLatest$ = combineLatest([this.obsA$, this.obsB$]).pipe(
    tap((el) => this.combineLastestResult.push(el))
  );
  combineLastestResult = [];
  //withTheLastestFrom
  subjectC$ = new Subject();
  obsC$ = this.subjectC$.asObservable().pipe(
    map(() => 'C' + this.obsCResult.length),
    tap((value) => {
      this.obsCResult.push(value);
    }),
    share()
  );
  obsCResult = [];

  subjectD$ = new Subject();
  obsD$ = this.subjectD$.asObservable().pipe(
    map(() => 'D' + this.obsDResult.length),
    tap((value) => {
      this.obsDResult.push(value);
    }),
    share()
  );
  obsDResult = [];

  withTheLatestFrom$ = this.obsC$.pipe(
    withLatestFrom(this.obsD$),
    tap((el) => this.withTheLatestFromResult.push(el))
  );
  withTheLatestFromResult = [];
  //forkJoin
  subjectE$ = new Subject();
  obsE$ = this.subjectE$.asObservable().pipe(
    map(() => 'E' + this.obsEResult.length),
    tap((value) => {
      this.obsEResult.push(value);
    }),
    share()
  );
  obsEResult = [];

  subjectF$ = new Subject();
  obsF$ = this.subjectF$.asObservable().pipe(
    map(() => 'F' + this.obsFResult.length),
    tap((value) => {
      this.obsFResult.push(value);
    }),
    share()
  );
  obsFResult = [];
  forkJoin$ = forkJoin([this.obsE$, this.obsF$]);
  //zip
  subjectG$ = new Subject();
  obsG$ = this.subjectG$.asObservable().pipe(
    map(() => 'G' + this.obsGResult.length),
    tap((value) => {
      this.obsGResult.push(value);
    }),
    share()
  );
  obsGResult = [];

  subjectH$ = new Subject();
  obsH$ = this.subjectH$.asObservable().pipe(
    map(() => 'H' + this.obsHResult.length),
    tap((value) => {
      this.obsHResult.push(value);
    }),
    share()
  );
  obsHResult = [];
  zip$ = zip([this.obsG$, this.obsH$]).pipe(
    tap((el) => this.zipResult.push(el))
  );
  zipResult = [];
  //concat
  subjectI$ = new Subject();
  obsI$ = this.subjectI$.asObservable().pipe(
    map(() => 'I' + this.obsIResult.length),
    tap((value) => {
      this.obsIResult.push(value);
    }),
    share()
  );
  obsIResult = [];

  subjectJ$ = new Subject();
  obsJ$ = this.subjectJ$.asObservable().pipe(
    map(() => 'J' + this.obsJResult.length),
    tap((value) => {
      this.obsJResult.push(value);
    }),
    share()
  );
  obsJResult = [];
  concat$ = concat(this.obsI$, this.obsJ$).pipe(
    tap((el) => {
      return this.concatResult.push(el);
    })
  );
  concatResult = [];
  //pairWise
  subjectK$ = new Subject();
  obsK$ = this.subjectK$.asObservable().pipe(
    map(() => 'K' + this.obsKResult.length),
    tap((value) => {
      this.obsKResult.push(value);
    }),
    share()
  );
  obsKResult = [];
  pairwise$ = this.obsK$.pipe(
    pairwise(),
    tap((value) => {
      this.pairwiseResult.push(value);
    })
  );
  pairwiseResult = [];

  //merge
  subjectM$ = new Subject();
  obsM$ = this.subjectM$.asObservable().pipe(
    map(() => 'M' + this.obsMResult.length),
    tap((value) => {
      this.obsMResult.push(value);
    }),
    share()
  );
  obsMResult = [];

  subjectN$ = new Subject();
  obsN$ = this.subjectN$.asObservable().pipe(
    map(() => 'N' + this.obsNResult.length),
    tap((value) => {
      this.obsNResult.push(value);
    }),
    share()
  );
  obsNResult = [];
  merge$ = merge(this.obsM$, this.obsN$).pipe(
    tap((el) => this.mergeResult.push(el))
  );
  mergeResult = [];
  constructor() {}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.takeUntil$.next(true);
  }
}
