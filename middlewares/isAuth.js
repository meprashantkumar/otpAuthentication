import User from "@/models/User";
import jwt from "jsonwebtoken";

export const checkAuth = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return await User.findById(decoded._id).select("-password");
};
