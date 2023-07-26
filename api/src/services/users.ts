import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/User";

export const createUserService = async (
  newUser: UserDocument
): Promise<UserDocument> => {
  try {
    return await newUser.save();
  } catch (error) {
    throw error;
  }
};

export const findUserByEmailService = async (
  userEmail: string
): Promise<UserDocument> => {
  try {
    // using select query to avoid sending user password to the client
    // const foundUser = await User.findOne({ email: userEmail }).select(
    //   "-password"
    // );

    const foundUser = await User.findOne({ email: userEmail });
    if (!foundUser) {
      throw new NotFoundError(
        `Cannot find any user with the email ${userEmail}.`
      );
    }
    return foundUser;
  } catch (error) {
    throw error;
  }
};

export const updateUserInfoByIdService = async (
  userId: string,
  newUserInformation: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(userId, newUserInformation, {
    new: true,
  });
  try {
    if (!user) {
      throw new NotFoundError(`User ${userId} not found`);
    }
    return user;
  } catch (error) {
    throw error;
  }
};
