import { ILocalized } from '@thefirstspine/types-game';
import { IGameInteraction } from './game-interaction.interface';

export interface IGameAction<T extends IGameInteraction> {
  type: string;
  name: ILocalized;
  description: ILocalized;
  createdAt: number;
  expiresAt?: number;
  user: number;
  priority: number;
  interaction: T,
  response?: {
    [key: string]: any;
  }
}
