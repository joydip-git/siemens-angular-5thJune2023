import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { Routes, RouterModule } from "@angular/router";

const commonRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot(commonRoutes)
  ],
  exports: [DashboardComponent]
})
export class PmsCommonModule { }
