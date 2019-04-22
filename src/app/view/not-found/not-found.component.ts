import { Component } from '@angular/core';
import { Routes } from '../../routing/routes.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html'
})
export class NotFoundComponent {
  constructor(private router: Router) {
  }

  onClick(): void {
    this.router.navigate([Routes.DASHBOARD]);
  }
}
