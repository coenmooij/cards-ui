import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScoreCardComponent } from './score-card/score-card.component';

const COMPONENTS = [
  DashboardComponent,
  NotFoundComponent,
  ScoreCardComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ViewModule {
}
