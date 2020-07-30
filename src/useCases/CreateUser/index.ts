import { PostgresRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgresRepository();
const mailtrapProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
