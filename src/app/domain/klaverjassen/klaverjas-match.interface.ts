import { KlaverjasPlayer } from './klaverjas-player.interface';
import { KlaverjasRound } from './klaverjas-round.interface';

export interface KlaverjasMatch {
  teamOne: KlaverjasPlayer[];
  teamTwo: KlaverjasPlayer[];
  teamOneScore: number;
  teamTwoScore: number;
  rounds: KlaverjasRound[];
}
