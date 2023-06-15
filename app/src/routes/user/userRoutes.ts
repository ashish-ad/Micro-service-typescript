import Routes from "../index";
import { Router } from "express";
// import UserController from "@/src/controller/userController/userController";
import validationMiddleware from "../../../middleware/validation.middleware";
import { UserRequestDto } from "../../dtos/userRequestDto/userRequestDto";
import UserController from "../../controller/userController/userController";

export default class UserRoutes implements Routes {
  public path: string;
  public router: Router;
  private userController: UserController;

  constructor() {
    this.path = "/user";
    this.router = Router();
    this.userController = new UserController();
    this.intializeRoutes();
  }

  private intializeRoutes = (): void => {
    // this.router.get(`${this.path}/`, )
    this.router.post(`${this.path}/`, validationMiddleware(UserRequestDto, 'body'), this.userController.create);
    // this.router.get(`${this.path}/:id`, )
  };
}
