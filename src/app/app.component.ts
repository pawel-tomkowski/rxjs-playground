import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'observable';
  public logs$;
  displayedColumns: string[] = ['name', 'content'];
  constructor(private readonly loggingService: LoggingService) {
    this.logs$ = this.loggingService.$logs;
  }
}
