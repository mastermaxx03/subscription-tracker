import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET } from "../config/env.js";

const authorize = async (req, res, next) => {
  try {
    let token;
    // Check if authorization header exists and starts with Bearer
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) return res.status(401).json({ message: "unauthorized" });
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user to request object (optional: populate user if needed)
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ message: "unauthorized" });
    req.user = user;
    next(); // Proceed to next middleware or route
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized", error: error.message });
  }
};

export default authorize;
