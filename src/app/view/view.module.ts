import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeartsComponent } from './hearts/hearts.component';
import { JassComponent } from './jass/jass.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [
  DashboardComponent,
  NotFoundComponent,
  JassComponent,
  HeartsComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ViewModule {
}
