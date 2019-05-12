import { Component } from '@angular/core';
import { GameSummary } from '../../domain/games/game-summary.interface';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  summaries: GameSummary[] = [
    {
      title: 'Sudoku',
      description: 'Generates on-the-fly sudoku puzzles in 5 difficulties and lets you fill them in, check if you have done it correctly',
      route: `/${Routes.SUDOKU}`,
      imageUrl: '/assets/images/sudoku-screenshot.png',
      sources: [
        {title: 'Sudoku PHP7 Library', url: 'https://github.com/coenmooij/sudoku'},
        {title: 'Sudoku Symfony Bundle', url: 'https://github.com/coenmooij/sudokuBundle'},
        {title: 'Sudoku Symfony API', url: 'https://github.com/coenmooij/sudoku-api-symfony'},
        {title: 'Sudoku Angular UI', url: 'https://github.com/coenmooij/sudoku-gui-angular'},
        {title: 'Sudoku Laravel API', url: 'https://github.com/coenmooij/sudoku-api-laravel'}
      ],
      demoUrl: 'https://sudoku-gui-angular.coenmooij.nl'
    }, {
      title: 'Bingo',
      description: 'Kahoot like bingo to play online. Create a new game as a host, or join a game as a player.',
      route: `/${Routes.BINGO}`,
      imageUrl: '/assets/images/bingo-screenshot.png',
      sources: [
        {title: 'Bingo UI', url: 'https://github.com/coenmooij/bingo-ui'},
        {title: 'Bingo API', url: 'https://github.com/coenmooij/bingo-api'}
      ]
    }, {
      title: 'Klaverjassen',
      description: 'A score tracker for the Dutch game Klaverjassen. Easily keep track of whose turn it is to shuffle and who is winning.',
      route: `/${Routes.KLAVERJASSEN}`,
      imageUrl: '/assets/images/klaverjassen-screenshot.png',
      sources: [
        {title: 'Klaverjassen Vue.js UI', url: 'https://github.com/coenmooij/klaverjassen-vue'}
      ]
    }, {
      title: 'Hartenjagen',
      description: 'A score tracker for the game of Hearts, or Hartenjagen in Dutch. Add players, and double-check your counts.',
      route: `/${Routes.HARTENJAGEN}`,
      sources: []
    }, {
      title: 'Pong',
      description: 'Play the oldschool game of pong in your browser. With a rainbow colored ball of course.',
      imageUrl: '/assets/images/pong-screenshot.png',
      route: `/${Routes.PONG}`,
      sources: [
        {title: 'Pong', url: 'https://github.com/coenmooij/pong'}
      ]
    }
  ];
}
