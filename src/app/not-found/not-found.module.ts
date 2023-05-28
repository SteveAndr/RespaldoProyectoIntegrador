import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ]
})
export class NotFoundModule { }
