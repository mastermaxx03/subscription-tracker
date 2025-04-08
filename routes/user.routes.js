import { Router } from "express";

const userRouter = Router();

// 1. Get all users
userRouter.get("/", (req, res) => {
  res.send({
    body: {
      title: "Get all users",
    },
  });
});

// 2. Get user by ID
userRouter.get("/:id", (req, res) => {
  res.send({
    body: {
      title: `Get user with ID ${req.params.id}`,
    },
  });
});

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
