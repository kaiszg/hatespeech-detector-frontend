import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LabelledComponent } from './labelled/labelled.component';
import { UnlabelledComponent } from './unlabelled/unlabelled.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabelledCommentComponent } from './labelled/labelled-comment/labelled-comment.component';
import { UnlabelledCommentComponent } from './unlabelled/unlabelled-comment/unlabelled-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    LabelledComponent,
    UnlabelledComponent,
    DashboardComponent,
    LabelledCommentComponent,
    UnlabelledCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
