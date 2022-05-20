import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private readonly _logs = new BehaviorSubject(new Array());
  $logs = this._logs.asObservable();

  constructor() {}

  addLog(source: string, content: string) {
    const newLogs = [{ source, content }, ...this._logs.getValue()];
    this._logs.next(newLogs);
  }

  clearLogs() {
    this._logs.next([]);
  }
}
