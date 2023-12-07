import { ICardCoords, cardLocation, ICard, ICardStat } from "@thefirstspine/types-game";

export interface IGameCard {
  id: string;
  coords?: ICardCoords;
  user: number;
  location: cardLocation;
  card: ICard;
  currentStats?: ICardStat;
  metadata?: {
    [key: string]: any,
  };
}
