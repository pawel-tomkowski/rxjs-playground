import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ObservableComponent } from './pages/observable/observable.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { MatTableModule } from '@angular/material/table';
import { CreationOperatorsPageComponent } from './pages/creation-operators-page/creation-operators-page.component';
import { FilteringOperatorsPageComponent } from './pages/filtering-operators-page/filtering-operators-page.component';
import { MatInputModule } from '@angular/material/input';
import { CombinationOperatorsPageComponent } from './pages/combination-operators-page/combination-operators-page.component';
import { TransformationOperatorsPageComponent } from './pages/transformation-operators-page/transformation-operators-page.component';
import { UtilityOperatorsPageComponent } from './pages/utility-operators-page/utility-operators-page.component';
import { MulticastingOperatorsPageComponent } from './pages/multicasting-operators-page/multicasting-operators-page.component';
import { ErrorHandlingOperatorsPageComponent } from './pages/error-handling-operators-page/error-handling-operators-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { StoreModule } from '@ngrx/store';
import { USERS } from './store/users/users.conts';
import { UsersReducer } from './store/users/users.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from './store/users/users.effects';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectPageComponent,
    CreationOperatorsPageComponent,
    FilteringOperatorsPageComponent,
    CombinationOperatorsPageComponent,
    TransformationOperatorsPageComponent,
    UtilityOperatorsPageComponent,
    MulticastingOperatorsPageComponent,
    ErrorHandlingOperatorsPageComponent,
    UsersListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule,
    StoreModule.forRoot({ [USERS]: UsersReducer }),
    EffectsModule.forRoot([UsersEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
