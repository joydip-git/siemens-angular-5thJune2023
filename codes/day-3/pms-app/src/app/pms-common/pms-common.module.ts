import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { Routes } from "@angular/router";

const commonRoutes: Routes = [
  {
    path: '', component:
  },
  {},
  {}
]


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent]
})
export class PmsCommonModule { }
