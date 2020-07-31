import { PostgresRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { ListUserUseCase } from "./ListUserUseCase";
import { ListUserController } from "./ListUserController";

const postgresRepository = new PostgresRepository();

const listUserUseCase = new ListUserUseCase(postgresRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController, listUserUseCase };
