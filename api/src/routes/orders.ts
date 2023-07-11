import Router from "express";

import { createOrder, getOrderByUserId } from "../controllers/orders";

const router = Router();

router.post("/:userId", createOrder);

// passport.authenticate("jwt", {session: false}),

router.get("/:id", getOrderByUserId);

export default router;
