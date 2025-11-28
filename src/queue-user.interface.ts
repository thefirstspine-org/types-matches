import { ICard } from "@thefirstspine/types-game";

export interface IQueueUser {
  user: string;
  score: number;
  cards: ICard[];
  queueExpiresAt: number;
}
