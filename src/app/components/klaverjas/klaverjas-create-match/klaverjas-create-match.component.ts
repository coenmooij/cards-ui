import { Component, EventEmitter, Output } from '@angular/core';
import { KlaverjasMatch } from '../../../domain/klaverjas/klaverjas-match.interface';

@Component({
  selector: 'app-klaverjas-create-match',
  templateUrl: 'klaverjas-create-match.component.html'
})
export class KlaverjasCreateMatchComponent {
  @Output() createMatch = new EventEmitter<KlaverjasMatch>();

  klaverjasMatch: KlaverjasMatch = {
    teamOne: {playerOne: {name: ''}, playerTwo: {name: ''}},
    teamTwo: {playerOne: {name: ''}, playerTwo: {name: ''}},
    teamOneScore: 0,
    teamTwoScore: 0,
    rounds: []
  };

  onCreateMatch(): void {
    this.createMatch.emit(this.klaverjasMatch);
  }
}
