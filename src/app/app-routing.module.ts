import { LabelledComponent } from './labelled/labelled.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnlabelledComponent } from './unlabelled/unlabelled.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'labelled', component: LabelledComponent },
  { path: 'unlabelled', component: UnlabelledComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
