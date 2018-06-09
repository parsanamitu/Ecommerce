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
// Last updated: 2025-02-20T20:42:28.385Z
// Last updated: 2025-02-20T20:42:31.526Z
// Last updated: 2025-02-20T20:42:32.863Z
// Last updated: 2025-02-20T20:42:33.534Z
// Last updated: 2025-02-20T20:42:33.757Z
// Last updated: 2025-02-20T20:42:33.981Z
// Last updated: 2025-02-20T20:42:38.101Z
// Last updated: 2025-02-20T20:42:39.437Z
// Last updated: 2025-02-20T20:42:39.904Z
// Last updated: 2025-02-20T20:49:47.493Z
// Last updated: 2025-02-20T20:49:49.128Z
// Last updated: 2025-02-20T20:49:50.265Z
// Last updated: 2025-02-20T20:49:50.509Z
// Last updated: 2025-02-20T20:49:50.734Z
