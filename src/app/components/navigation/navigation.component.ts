import { Component, Input } from '@angular/core';
import { Page } from '../domain/page.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
  @Input() pages: Page[] = [];
}
