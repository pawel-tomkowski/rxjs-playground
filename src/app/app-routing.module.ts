import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservableComponent } from './pages/observable/observable.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
