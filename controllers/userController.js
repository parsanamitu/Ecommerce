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
// Last updated: 2025-02-20T20:59:06.933Z
// Last updated: 2025-02-20T20:59:08.616Z
// Last updated: 2025-02-20T20:59:11.214Z
// Last updated: 2025-02-20T20:59:11.996Z
// Last updated: 2025-02-20T20:59:12.273Z
// Last updated: 2025-02-20T20:59:13.013Z
// Last updated: 2025-02-20T20:59:14.768Z
// Last updated: 2025-02-20T20:59:16.617Z
// Last updated: 2025-02-20T21:41:43.142Z
// Last updated: 2025-02-20T21:41:43.653Z
// Last updated: 2025-02-20T21:41:45.356Z
// Last updated: 2025-02-20T21:41:46.302Z
// Last updated: 2025-02-20T21:41:47.087Z
// Last updated: 2025-02-20T21:41:48.025Z
// Last updated: 2025-02-20T21:41:53.447Z
// Last updated: 2025-02-20T21:41:55.545Z
// Last updated: 2025-02-20T21:41:55.773Z
// Last updated: 2025-02-20T21:41:56.470Z
// Last updated: 2025-02-20T21:41:56.699Z
// Last updated: 2025-02-20T21:41:57.850Z
// Last updated: 2025-02-20T21:41:58.314Z
// Last updated: 2025-02-20T21:41:59.324Z
// Last updated: 2025-02-20T21:41:59.829Z
// Last updated: 2025-02-20T21:42:01.945Z
// Last updated: 2025-02-20T21:42:04.042Z
// Last updated: 2025-02-20T21:42:05.196Z
// Last updated: 2025-02-20T21:42:08.038Z
// Last updated: 2025-02-20T21:42:10.558Z
// Last updated: 2025-02-20T21:42:10.815Z
// Last updated: 2025-02-20T21:42:11.499Z
// Last updated: 2025-02-20T21:42:13.841Z
// Last updated: 2025-02-20T21:42:14.998Z
// Last updated: 2025-02-20T21:42:15.219Z
// Last updated: 2025-02-20T21:42:18.471Z
// Last updated: 2025-02-20T21:42:19.402Z
// Last updated: 2025-02-20T21:42:21.474Z
// Last updated: 2025-02-20T21:42:22.230Z
// Last updated: 2025-02-20T21:42:23.708Z
// Last updated: 2025-02-20T21:42:24.718Z
// Last updated: 2025-02-20T21:42:26.244Z
// Last updated: 2025-02-20T21:42:28.552Z
// Last updated: 2025-02-20T21:42:29.021Z
// Last updated: 2025-02-20T21:42:30.679Z
// Last updated: 2025-02-20T22:08:39.514Z
// Last updated: 2025-02-20T22:08:40.351Z
// Last updated: 2025-02-20T22:08:42.577Z
// Last updated: 2025-02-20T22:08:43.297Z
// Last updated: 2025-02-20T22:08:43.783Z
// Last updated: 2025-02-20T22:08:44.929Z
// Last updated: 2025-02-20T22:08:47.167Z
// Last updated: 2025-02-20T22:08:48.355Z
// Last updated: 2025-02-20T22:08:48.843Z
// Last updated: 2025-02-20T22:08:49.078Z
// Last updated: 2025-02-20T22:08:49.321Z
// Last updated: 2025-02-20T22:08:51.792Z
// Last updated: 2025-02-20T22:08:52.494Z
// Last updated: 2025-02-20T22:08:53.680Z
// Last updated: 2025-02-20T22:08:55.795Z
// Last updated: 2025-02-20T22:08:57.548Z
// Last updated: 2025-02-20T22:08:58.280Z
// Last updated: 2025-02-20T22:09:01.838Z
// Last updated: 2025-02-20T22:09:02.062Z
// Last updated: 2025-02-20T22:09:03.250Z
// Last updated: 2025-02-20T22:09:04.498Z
// Last updated: 2025-02-20T22:09:04.960Z
// Last updated: 2025-02-20T22:09:08.874Z
// Last updated: 2025-02-20T22:09:09.423Z
// Last updated: 2025-02-20T22:09:11.523Z
// Last updated: 2025-02-20T22:09:14.400Z
// Last updated: 2025-02-20T22:09:16.856Z
// Last updated: 2025-02-20T22:09:17.790Z
// Last updated: 2025-02-20T22:09:20.665Z
// Last updated: 2025-02-20T22:09:25.073Z
// Last updated: 2025-02-20T22:09:25.550Z
// Last updated: 2025-02-20T22:09:26.258Z
// Last updated: 2025-02-20T22:14:21.681Z
// Last updated: 2025-02-20T22:14:22.992Z
// Last updated: 2025-02-20T22:14:24.926Z
// Last updated: 2025-02-20T22:14:25.174Z
// Last updated: 2025-02-20T22:14:27.614Z
// Last updated: 2025-02-20T22:14:29.078Z
// Last updated: 2025-02-20T22:14:31.046Z
// Last updated: 2025-02-20T22:14:36.598Z
// Last updated: 2025-02-20T22:14:37.582Z
// Last updated: 2025-02-20T22:14:39.342Z
// Last updated: 2025-02-20T22:14:46.901Z
// Last updated: 2025-02-20T22:14:47.143Z
// Last updated: 2025-02-20T22:14:47.381Z
// Last updated: 2025-02-20T22:14:50.051Z
// Last updated: 2025-02-20T22:14:51.734Z
// Last updated: 2025-02-20T22:14:53.443Z
// Last updated: 2025-02-20T22:14:53.931Z
// Last updated: 2025-02-20T22:14:56.018Z
// Last updated: 2025-02-20T22:14:56.256Z
// Last updated: 2025-02-20T22:14:59.703Z
// Last updated: 2025-02-20T22:15:05.162Z
// Last updated: 2025-02-20T22:15:10.732Z
// Last updated: 2025-02-20T22:15:11.962Z
// Last updated: 2025-02-20T22:15:12.697Z
// Last updated: 2025-02-20T22:15:12.938Z
// Last updated: 2025-02-20T22:15:13.192Z
// Last updated: 2025-02-20T22:15:15.024Z
// Last updated: 2025-02-20T22:15:16.532Z
// Last updated: 2025-02-20T22:15:19.021Z
// Last updated: 2025-02-20T22:15:21.052Z
// Last updated: 2025-02-20T22:15:24.250Z
// Last updated: 2025-02-20T22:15:24.730Z
// Last updated: 2025-02-20T22:15:26.802Z
// Last updated: 2025-02-20T22:15:28.515Z
// Last updated: 2025-02-20T22:15:30.545Z
// Last updated: 2025-02-20T22:15:32.019Z
// Last updated: 2025-02-20T22:15:33.217Z
// Last updated: 2025-02-20T22:15:33.707Z
// Last updated: 2025-02-20T22:17:06.102Z
// Last updated: 2025-02-20T22:17:08.433Z
// Last updated: 2025-02-20T22:17:09.408Z
// Last updated: 2025-02-20T22:17:11.474Z
// Last updated: 2025-02-20T22:17:12.724Z
// Last updated: 2025-02-20T22:17:14.845Z
// Last updated: 2025-02-20T22:17:15.907Z
// Last updated: 2025-02-20T22:17:17.813Z
// Last updated: 2025-02-20T22:17:18.652Z
// Last updated: 2025-02-20T22:17:20.456Z
// Last updated: 2025-02-20T22:17:24.444Z
// Last updated: 2025-02-20T22:17:24.979Z
// Last updated: 2025-02-20T22:17:26.941Z
// Last updated: 2025-02-20T22:17:28.936Z
// Last updated: 2025-02-20T22:17:31.961Z
// Last updated: 2025-02-20T22:17:32.679Z
// Last updated: 2025-02-20T22:17:34.244Z
// Last updated: 2025-02-20T22:17:39.222Z
// Last updated: 2025-02-20T22:17:40.519Z
// Last updated: 2025-02-20T22:17:43.521Z
// Last updated: 2025-02-20T22:17:49.991Z
// Last updated: 2025-02-20T22:17:54.483Z
// Last updated: 2025-02-20T22:17:57.032Z
// Last updated: 2025-02-20T22:17:59.738Z
// Last updated: 2025-02-20T22:18:00.763Z
// Last updated: 2025-02-20T22:18:01.502Z
// Last updated: 2025-02-20T22:18:02.761Z
// Last updated: 2025-02-20T22:18:04.763Z
// Last updated: 2025-02-20T22:18:06.556Z
// Last updated: 2025-02-20T22:18:08.098Z
// Last updated: 2025-02-20T22:18:10.108Z
// Last updated: 2025-02-20T22:18:12.068Z
// Last updated: 2025-02-20T22:18:13.332Z
// Last updated: 2025-02-20T22:18:14.313Z
