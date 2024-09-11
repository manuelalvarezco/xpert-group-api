import { User } from "../models/user.model";

export const register = async (body: any) => {
  const user = new User(body);
  return await user.save();
};
