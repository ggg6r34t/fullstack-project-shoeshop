import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/User";

export const createUserService = async (
  user: UserDocument
): Promise<UserDocument> => {
  return await user.save();
};

export const findUserByEmailService = async (
  userEmail: string
): Promise<UserDocument | undefined | null> => {
  const user = await User.findById(userEmail);
  if (!user) {
    throw new NotFoundError(
      `Cannot find any user with the email ${userEmail}.`
    );
  }
  return user;
};
