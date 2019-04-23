import { Component } from '@angular/core';
import { Page } from '../../components/domain/page.interface';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-page-layout',
  templateUrl: 'page-layout.component.html'
})
export class PageLayoutComponent {
  pages: Page[] = [
    {name: 'Dashboard', route: Routes.DASHBOARD},
    {name: 'Score Card', route: Routes.SCORE_CARD}
  ];
}
