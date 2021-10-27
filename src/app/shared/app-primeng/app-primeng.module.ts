import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { InputTextModule } from 'primeng/inputtext';

import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    ProgressSpinnerModule,
  ],
})
export class AppPrimengModule {}
