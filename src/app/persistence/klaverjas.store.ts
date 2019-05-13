import { Injectable } from '@angular/core';
import { KlaverjasMatch } from '../domain/klaverjas/klaverjas-match.interface';
import { Store } from './store';

const ACTIVE_MATCH = 'klaverjas_active_match';
const MATCH_HISTORY = 'klaverjas_match_history';

@Injectable({
  providedIn: 'root'
})
export class KlaverjasStore {
  constructor(private store: Store) {
  }

  getMatchHistory(): KlaverjasMatch[] {
    const matchHistory = this.store.get(MATCH_HISTORY);
    return JSON.parse(matchHistory);
  }

  saveMatchToHistory(match: KlaverjasMatch): void {
    const matchHistory = this.getMatchHistory();
    matchHistory.push(match);
    this.store.set(MATCH_HISTORY, JSON.stringify(matchHistory));
  }

  getActiveMatch(): KlaverjasMatch {
    const match = this.store.get(ACTIVE_MATCH);
    return JSON.parse(match);
  }

  saveActiveMatch(match: KlaverjasMatch): void {
    this.store.set(ACTIVE_MATCH, JSON.stringify(match));
  }
}
