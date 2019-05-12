import { Suits } from '../cards/suits.enum';

export interface KlaverjasGame {
  teamOneScore: number;
  teamTwoScore: number;
  trump: Suits;
}
