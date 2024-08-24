import { ICard } from "@thefirstspine/types-game";

export interface IApiJoinQueueParams {
  key: string;
  cards: ICard[];
  score: number;
}
