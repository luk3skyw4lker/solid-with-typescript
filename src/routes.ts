import { Router, response } from "express";

import { createUserController } from "./useCases/CreateUser/index";
import { listUserController } from "./useCases/ListUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/users", (request, response) => {
  return listUserController.handle(request, response);
});

export { router };
