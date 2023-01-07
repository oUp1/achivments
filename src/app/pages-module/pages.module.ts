import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModuleRouting } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AchivmentItemComponent } from './components/achivment-item/achivment-item.component';


@NgModule({
  declarations: [
    PagesComponent,
    AchivmentItemComponent
  ],
  imports: [
    CommonModule,
    PagesModuleRouting
  ]
})
export class PagesModule { }
