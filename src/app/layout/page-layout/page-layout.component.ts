import { Component } from '@angular/core';
import { Page } from '../../domain/page.interface';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-page-layout',
  templateUrl: 'page-layout.component.html'
})
export class PageLayoutComponent {
  pages: Page[] = [
    {name: 'Bingo', route: `/${Routes.BINGO}`},
    {name: 'Sudoku', route: `/${Routes.SUDOKU}`},
    {name: 'Klaverjassen', route: `/${Routes.JASS}`},
    {name: 'Hartenjagen', route: `/${Routes.HEARTS}`},
    {name: 'Pong', route: `/${Routes.PONG}`}
  ];
}
