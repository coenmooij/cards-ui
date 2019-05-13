import { Component } from '@angular/core';

@Component({
  selector: 'app-klaverjassen',
  templateUrl: 'klaverjassen.component.html'
})
export class KlaverjassenComponent {
  scores = [];
  hasActiveMatch = false;

  onStartGame(): void {
    console.log('game started');
  }
}
