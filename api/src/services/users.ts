import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/User";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

export default { createUserService };
