import { IGameCard } from "./game-card.interface";
import { IQueueUser } from "./queue-user.interface";

/**
 * A queue instance is a queue created in Arena the users can join.
 */
export interface IQueueInstance {

  /**
   * The key of the instance. Should be unique.
   */
  key: string;

  /**
   * The user joined.
   */
  queueUsers: IQueueUser[];

  /**
   * The speed of the instances created from the queue.
   * Lower value means quicker expiration times.
   */
  expirationTimeModifier?: number;

  /**
   * Creation date.
   */
  createdAt: number;

  /**
   * Expiration date. No expiration on unset field.
   */
  expiresAt?: number;

  /**
   * The cards that will be added in the intance by default.
   */
  cards: IGameCard[];
}