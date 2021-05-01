import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvCommonComponent } from './_index';

const routes: Routes = [
  { path: '' , component: CvCommonComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
