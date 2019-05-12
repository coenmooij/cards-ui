import { Repository } from './repository.interface';

export interface GameSummary {
  title: string;
  description: string;
  route: string;
  sources: Repository[];
  demoUrl?: string;
  imageUrl?: string;
}
