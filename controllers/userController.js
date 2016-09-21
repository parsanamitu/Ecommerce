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
// Last updated: 2025-02-20T20:42:18.481Z
// Last updated: 2025-02-20T20:42:18.933Z
// Last updated: 2025-02-20T20:42:21.392Z
// Last updated: 2025-02-20T20:42:23.262Z
// Last updated: 2025-02-20T20:42:26.765Z
// Last updated: 2025-02-20T20:42:27.244Z
// Last updated: 2025-02-20T20:42:28.152Z
