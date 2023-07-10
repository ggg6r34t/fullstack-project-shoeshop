import { Request, Response } from "express";

import User from "../models/User";
import UserServices from "../services/users";

export const createUser = async (req: Request, res: Response) => {
  const userInformation = new User({
    email: req.body.email,
    password: req.body.password,
  });

  // response to frontend
  const newUser = await UserServices.createUserService(userInformation);
  res.status(200).json(newUser);
};
