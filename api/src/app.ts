import express, { Express } from "express";
import cors from "cors";

import productRouter from "./routes/products";
import userRouter from "./routes/users";

export const app: Express = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/products", productRouter);
app.use("/users", userRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
