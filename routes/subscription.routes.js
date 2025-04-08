import { Router } from "express";

const subscriptionRouter = Router();
subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subscriptions" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get subscription details" })
);
subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "Create subscription " })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update subscription details" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete subscription details" })
);
subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "Get all subscription details of a user" })
);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription " })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: " Get upcoming renewals" })
);
export default subscriptionRouter;
