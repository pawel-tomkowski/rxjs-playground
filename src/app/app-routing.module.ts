import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationOperatorsPageComponent } from './pages/combination-operators-page/combination-operators-page.component';
import { CreationOperatorsPageComponent } from './pages/creation-operators-page/creation-operators-page.component';
import { FilteringOperatorsPageComponent } from './pages/filtering-operators-page/filtering-operators-page.component';

import { ObservableComponent } from './pages/observable/observable.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { TransformationOperatorsPageComponent } from './pages/transformation-operators-page/transformation-operators-page.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectPageComponent },
  { path: 'creation-operators', component: CreationOperatorsPageComponent },
  { path: 'filtering-operators', component: FilteringOperatorsPageComponent },
  {
    path: 'combination-operators',
    component: CombinationOperatorsPageComponent,
  },
  {
    path: 'transformation-operators',
    component: TransformationOperatorsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
