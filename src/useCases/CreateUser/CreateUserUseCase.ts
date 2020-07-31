import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IMailProvider } from "../../providers/IMailProvider";
import { User } from "../../entities/User";

// Applying Single Responsability Principle
// The class has only one responsability: create user
export class CreateUserUseCase {
  // Applying Liskov Substitution Principle
  // Doesn't matter what the repository is, as long it have the methods that are used here it will work.
  // Applying Dependency Inversion Principle
  // We do not depend on the implementation itself, only on the abstraction
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "MyApp Team",
        email: "team@myapp.com"
      },
      subject: "Welcome to our platform!",
      body: "<p>You can already log in.</p>"
    });

    return user;
  }
}
