import { IGameUser } from "./game-user.interface";

export interface IApiGetUsersResponse {
  users: Array<{
    game: IGameUser,
  }>;
}
