import { Response, Request, NextFunction } from "express";
import { UserRequestDto } from "../../dtos/userRequestDto/userRequestDto";
import UserResponseDto from "../../dtos/userResponseDto/userResponseDto";
import UserService from "../../service/userService/userService";


export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async ( req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let reqBody: UserRequestDto = (req.body as any);
      console.log(req.body)
      let result: UserResponseDto = await this.userService.createUser(reqBody);

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}
