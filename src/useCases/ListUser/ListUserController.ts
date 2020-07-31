import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const users = this.listUserUseCase.execute();

      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ err: err.message || "Unexpected Error" });
    }
  }
}
