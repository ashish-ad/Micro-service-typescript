// import { ObjectId } from "mongodb";
import { Schema, model, ObjectId } from "mongoose";
import { GenderType } from "../../enums/genderType/genderType";

interface UserModalAttributes {
  _id : ObjectId,
  name: string;
  email: string;
  age? : number;
  gender: GenderType ;

  createdAt? : Date;
  updatedAt? : Date;
}

export interface UserModelInput extends Omit <UserModalAttributes, '_id' | "age" | "createdAt" | "updatedAt"> {}
export interface UserModelOutput extends Required<UserModalAttributes> {}

const UserSchema = new Schema<UserModalAttributes>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: [GenderType.FEMALE, GenderType.MALE]},
  createdAt : Date,
  updatedAt : Date
});

const UserModel = model<UserModalAttributes>("User", UserSchema);

export default UserModel