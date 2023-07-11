import express, { Express } from "express";
import cors from "cors";
import passport from "passport";

import { jwtStrategy } from "./config/passport";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import productRouter from "./routes/products";
import userRouter from "./routes/users";
import orderRouter from "./routes/orders";

export const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

// routes
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("order", orderRouter);

// error handler
app.use(apiErrorHandler);
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
