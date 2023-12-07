import { IGameResult } from "./game-result.interface";

export interface IApiGetGameResponse {
  id: number;
  status: 'active'|'ended'|'closed'|'conceded';
  users: number[],
  stats: {
    cardsInHand: {[key: number]: number},
    cardsInDeck: {[key: number]: number},
  };
  theme: string;
  modifiers: string[];
  result?: IGameResult[];
}
