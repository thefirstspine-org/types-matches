import { IGameResult } from "./game-result.interface";

export interface IApiGetGameResponse {
  id: number;
  status: 'active'|'ended'|'closed'|'conceded';
  users: number[],
  stats: {
    cardsInHand: {
      user: number,
      value: number,
    }[],
    cardsInDeck: {
      user: number,
      value: number,
    }[],
  };
  queue: string;
  result?: IGameResult[];
}
