import { Router } from "express";
import passport from "passport";

import { createUser, updateUserInfo, userLogin } from "../controllers/users";

const router = Router();

// create account or register
router.post("/register", createUser);

// user login
router.post("/login", userLogin);

// update account information after successful login
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);

export default router;
