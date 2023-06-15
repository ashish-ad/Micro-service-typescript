import UserModel, { UserModelInput, UserModelOutput } from "../../../models/userModel/userModel";
import BaseMongoDao from "../baseMongoDao";


export default class UserDao extends BaseMongoDao<UserModelInput, UserModelOutput> { 

    constructor(){
        super(UserModel)
    }
}