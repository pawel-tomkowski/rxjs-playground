import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationOperatorsPageComponent } from './pages/combination-operators-page/combination-operators-page.component';
import { CreationOperatorsPageComponent } from './pages/creation-operators-page/creation-operators-page.component';
import { ErrorHandlingOperatorsPageComponent } from './pages/error-handling-operators-page/error-handling-operators-page.component';
import { FilteringOperatorsPageComponent } from './pages/filtering-operators-page/filtering-operators-page.component';
import { MulticastingOperatorsPageComponent } from './pages/multicasting-operators-page/multicasting-operators-page.component';

import { ObservableComponent } from './pages/observable/observable.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { TransformationOperatorsPageComponent } from './pages/transformation-operators-page/transformation-operators-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UtilityOperatorsPageComponent } from './pages/utility-operators-page/utility-operators-page.component';

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
  {
    path: 'utility-operators',
    component: UtilityOperatorsPageComponent,
  },

  {
    path: 'multicasting-operators',
    component: MulticastingOperatorsPageComponent,
  },

  {
    path: 'catching-errors-operators',
    component: ErrorHandlingOperatorsPageComponent,
  },

  {
    path: 'users',
    component: UsersListPageComponent,
  },
  {
    path: 'user-details/:id',
    component: UserDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
