import { Component } from '@angular/core';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  // TODO : Make game interface
  games = [
    {
      title: 'Bingo',
      description: 'This is a description',
      route: `/${Routes.BINGO}`,
      hasImage: true,
      imageUrl: '/assets/images/bingo-screenshot.png',
      hasDemo: false,
      demoUrl: '',
      githubUrl: '' // TODO : Make plural
    }
  ];
}
