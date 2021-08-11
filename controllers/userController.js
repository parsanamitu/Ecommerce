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
// Last updated: 2025-02-20T20:49:51.183Z
// Last updated: 2025-02-20T20:49:51.929Z
// Last updated: 2025-02-20T20:49:53.238Z
// Last updated: 2025-02-20T20:49:53.502Z
// Last updated: 2025-02-20T20:49:53.981Z
// Last updated: 2025-02-20T20:49:56.085Z
// Last updated: 2025-02-20T20:49:56.604Z
// Last updated: 2025-02-20T20:49:57.890Z
// Last updated: 2025-02-20T20:50:02.310Z
// Last updated: 2025-02-20T20:50:13.753Z
// Last updated: 2025-02-20T20:50:13.999Z
// Last updated: 2025-02-20T20:50:17.028Z
// Last updated: 2025-02-20T20:50:18.700Z
// Last updated: 2025-02-20T20:50:19.751Z
// Last updated: 2025-02-20T20:50:21.079Z
// Last updated: 2025-02-20T20:50:21.903Z
// Last updated: 2025-02-20T20:50:23.807Z
// Last updated: 2025-02-20T20:50:24.080Z
// Last updated: 2025-02-20T20:50:28.025Z
// Last updated: 2025-02-20T20:50:31.057Z
// Last updated: 2025-02-20T20:50:34.883Z
// Last updated: 2025-02-20T20:50:36.735Z
// Last updated: 2025-02-20T20:50:39.012Z
// Last updated: 2025-02-20T20:58:25.718Z
// Last updated: 2025-02-20T20:58:28.852Z
// Last updated: 2025-02-20T20:58:30.163Z
// Last updated: 2025-02-20T20:58:31.087Z
// Last updated: 2025-02-20T20:58:33.199Z
// Last updated: 2025-02-20T20:58:33.664Z
// Last updated: 2025-02-20T20:58:35.605Z
// Last updated: 2025-02-20T20:58:38.492Z
// Last updated: 2025-02-20T20:58:40.994Z
// Last updated: 2025-02-20T20:58:43.957Z
// Last updated: 2025-02-20T20:58:51.006Z
// Last updated: 2025-02-20T20:58:52.903Z
// Last updated: 2025-02-20T20:58:53.814Z
// Last updated: 2025-02-20T20:58:54.616Z
// Last updated: 2025-02-20T20:58:55.625Z
// Last updated: 2025-02-20T20:58:56.896Z
// Last updated: 2025-02-20T20:58:57.154Z
// Last updated: 2025-02-20T20:58:59.547Z
// Last updated: 2025-02-20T20:59:02.077Z
// Last updated: 2025-02-20T20:59:05.745Z
