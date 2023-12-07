import { ICard } from "@thefirstspine/types-game";

export interface IQueueUser {
  user: number;
  cards: ICard[];
  queueExpiresAt: number;
}
