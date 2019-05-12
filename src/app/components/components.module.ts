import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCardComponent } from './dashboard/game-card/game-card.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { PageFooterComponent } from './layout/page-footer/page-footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { PageComponent } from './layout/page/page.component';

const COMPONENTS = [
  NavigationComponent,
  PageComponent,
  PageContentComponent,
  PageFooterComponent,
  PageHeaderComponent,
  GameCardComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {
}
