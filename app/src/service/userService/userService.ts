import { UserModelOutput } from "../../../models/userModel/userModel";
import UserDao from "../../daos/userDaos/userDaos";
import { UserRequestDto } from "../../dtos/userRequestDto/userRequestDto";
import UserResponseDto from "../../dtos/userResponseDto/userResponseDto";
// import { HttpException } from "../../../library/HttpException/HttpException";

export default class UserService {
  userDao: UserDao;
  userDto: UserRequestDto;
  userResponseDto: UserResponseDto;

  constructor() {
    this.userDao = new UserDao();
    this.userResponseDto = new UserResponseDto();
  }

  public createUser = async (userData: UserRequestDto): Promise<UserResponseDto> => {
    let result: UserModelOutput = await this.userDao.create(userData);
    return UserResponseDto.toResponse(result);
  };
}
