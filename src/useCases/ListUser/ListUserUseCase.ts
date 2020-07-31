import { IListUserRequestDTO } from "./ListUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const users = await this.usersRepository.findUsers();

    return users;
  }
}
