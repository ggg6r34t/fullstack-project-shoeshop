import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";
import {
  createUserService,
  findUserByEmailService,
  updateUserInfoByIdService,
} from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // destructing request.body
  const { email, password } = req.body;

  try {
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userInformation = new User({
      email,
      password: hashedPassword,
    });

    // response to frontend
    const newUser = await createUserService(userInformation);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // destructing request.body
  const { email, password } = req.body;

  // response to frontend
  // find user by email
  const userData = await findUserByEmailService(email);
  try {
    if (!userData) {
      res.status(403).json({ message: "Can't find user with that email." });
      return;
    }
    // verify user password
    const hashedPassword = userData.password;
    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);

    if (!isCorrectPassword) {
      throw new UnauthorizedError();
    }

    // token-based authentication
    const token = jwt.sign(
      {
        email: req.body.email,
        _id: userData._id,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ userData, token, isCorrectPassword });
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const userInformation = req.body;
    const user = await updateUserInfoByIdService(userId, userInformation);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
