import { Router } from "express";
import passport from "passport";

import { createUser, updateUserInfo, userLogin } from "../controllers/users";

const router = Router();

// create account or register
router.post("/", createUser);

// user login
router.post("/login", userLogin);

// update account information after successful login
router.put("/:userId", updateUserInfo);
passport.authenticate("jwt", { session: false });

export default router;
