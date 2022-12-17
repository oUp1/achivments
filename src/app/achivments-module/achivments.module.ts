import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchivmentsRoutingModule } from './achivments-routing.module';
import { AchivmentsTableComponent } from './componetns/achivments-table/achivments-table.component';


@NgModule({
  declarations: [
    AchivmentsTableComponent
  ],
  imports: [
    CommonModule,
    AchivmentsRoutingModule
  ]
})
export class AchivmentsModule { }
