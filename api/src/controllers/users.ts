import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import User from "../models/User";
import { createUserService } from "../services/users";
import { findUserByEmailService } from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userInformation = new User({
    email: req.body.email,
    password: req.body.password,
  });

  // response to frontend
  try {
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
  // response to frontend
  const userData = await findUserByEmailService(req.body.email);
  try {
    if (!userData) {
      res.status(403).json({ message: "Can't find user with that email." });
      return;
    }
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
    res.json({ token, userData });
  } catch (error) {
    next(error);
  }
};
