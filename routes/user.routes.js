import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";

import authorize from "../middleware/auth.middleware.js";
const userRouter = Router();

// 1. Get all users
userRouter.get("/", getUsers);

// 2. Get user by ID
userRouter.get("/:id", authorize, getUser);

// 3. Create a new user
userRouter.post("/", (req, res) => {
  res.send({
    body: {
      title: "Create new user",
    },
  });
});

// 4. Update user by ID
userRouter.put("/:id", (req, res) => {
  res.send({
    body: {
      title: `Update user with ID ${req.params.id}`,
    },
  });
});

// 5. Delete user by ID
userRouter.delete("/:id", (req, res) => {
  res.send({
    body: {
      title: `Delete user with ID ${req.params.id}`,
    },
  });
});

export default userRouter;
