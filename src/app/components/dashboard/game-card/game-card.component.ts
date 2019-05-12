import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: 'game-card.component.html'
})
export class GameCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() githubUrl = '';
  @Input() hasDemo = false;
  @Input() demoUrl = '';
  @Input() route = '';
  @Input() hasImage = false;
  @Input() imageUrl = '';
}
