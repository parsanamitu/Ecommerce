import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// Last updated: 2025-02-20T20:40:07.880Z
// Last updated: 2025-02-20T20:42:18.256Z
