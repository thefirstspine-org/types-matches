import { ICard } from "@thefirstspine/types-game";

export interface IQueueUser {
  user: number;
  score: number;
  cards: ICard[];
  queueExpiresAt: number;
}
