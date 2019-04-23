import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  NavigationComponent,
  PageComponent,
  PageContentComponent,
  PageFooterComponent,
  PageHeaderComponent
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
