import { KlaverjasRound } from './klaverjas-round.interface';
import { KlaverjasTeam } from './klaverjas-team.interface';

export interface KlaverjasMatch {
  teamOne: KlaverjasTeam;
  teamTwo: KlaverjasTeam;
  teamOneScore: number;
  teamTwoScore: number;
  rounds: KlaverjasRound[];
}
