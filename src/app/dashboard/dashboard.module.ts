import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimengModule } from './../shared/app-primeng/app-primeng.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppPrimengModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
