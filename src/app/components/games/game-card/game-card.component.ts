import { Component, Input } from '@angular/core';
import { GameSummary } from '../../../domain/games/game-summary.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: 'game-card.component.html'
})
export class GameCardComponent {
  @Input() summary: GameSummary = {
    title: '',
    description: '',
    sources: [],
    route: ''
  };

  placeholderImageUrl = '/assets/images/placeholder-image.png';
}
