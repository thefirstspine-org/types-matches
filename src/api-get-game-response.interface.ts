import { IGameUser } from "./game-user.interface";
import { IGameResult } from "./game-result.interface";

export interface IApiGetGameResponse {
  gameType: string;
  id: number;
  status: 'active'|'ended'|'closed'|'conceded';
  users: IGameUser[],
  stats: {
    cardsInHand: {[key: number]: number},
    cardsInDeck: {[key: number]: number},
  };
  theme: string;
  modifiers: string[];
  result?: IGameResult[];
}
