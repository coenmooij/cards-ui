import { Component, Input } from '@angular/core';
import { Page } from '../domain/page.interface';

@Component({
  selector: 'app-page-header',
  templateUrl: 'page-header.component.html'
})
export class PageHeaderComponent {
  @Input() pages: Page[] = [];

  onBrandClick(): void {
    event.preventDefault();
  }
}
