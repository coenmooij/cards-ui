import { Component } from '@angular/core';
import { Page } from '../../domain/layout/page.interface';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-page-layout',
  templateUrl: 'page-layout.component.html'
})
export class PageLayoutComponent {
  pages: Page[] = [
    {name: 'Bingo', route: `/${Routes.BINGO}`},
    {name: 'Sudoku', route: `/${Routes.SUDOKU}`},
    {name: 'Klaverjassen', route: `/${Routes.KLAVERJASSEN}`},
    {name: 'Hartenjagen', route: `/${Routes.HARTENJAGEN}`},
    {name: 'Pong', route: `/${Routes.PONG}`}
  ];
}
