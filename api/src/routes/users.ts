import { Router } from "express";

import { createUser } from "../controllers/users";

const router = Router();

// create account
router.post("/", createUser);

// update account information after successful login
// router.put("/:userId", updateInformation)
// passport.authenticate("jwt", {session: false})
// updateUser

export default router;
