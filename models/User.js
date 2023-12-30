import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
// Last updated: 2025-02-20T20:42:17.539Z
// Last updated: 2025-02-20T20:42:17.808Z
// Last updated: 2025-02-20T20:42:18.030Z
// Last updated: 2025-02-20T20:42:18.711Z
// Last updated: 2025-02-20T20:42:19.147Z
// Last updated: 2025-02-20T20:42:19.597Z
// Last updated: 2025-02-20T20:42:20.043Z
// Last updated: 2025-02-20T20:42:20.722Z
// Last updated: 2025-02-20T20:42:22.076Z
// Last updated: 2025-02-20T20:42:24.967Z
// Last updated: 2025-02-20T20:42:28.604Z
// Last updated: 2025-02-20T20:42:28.832Z
// Last updated: 2025-02-20T20:42:29.490Z
// Last updated: 2025-02-20T20:42:29.709Z
// Last updated: 2025-02-20T20:42:30.607Z
// Last updated: 2025-02-20T20:42:32.184Z
// Last updated: 2025-02-20T20:42:34.659Z
// Last updated: 2025-02-20T20:42:34.885Z
// Last updated: 2025-02-20T20:42:36.094Z
// Last updated: 2025-02-20T20:42:37.435Z
// Last updated: 2025-02-20T20:42:37.647Z
// Last updated: 2025-02-20T20:42:38.752Z
// Last updated: 2025-02-20T20:49:49.358Z
// Last updated: 2025-02-20T20:49:49.580Z
// Last updated: 2025-02-20T20:49:50.957Z
// Last updated: 2025-02-20T20:49:52.448Z
// Last updated: 2025-02-20T20:49:54.240Z
// Last updated: 2025-02-20T20:49:55.229Z
// Last updated: 2025-02-20T20:49:55.537Z
// Last updated: 2025-02-20T20:49:59.801Z
// Last updated: 2025-02-20T20:50:00.641Z
// Last updated: 2025-02-20T20:50:01.117Z
// Last updated: 2025-02-20T20:50:05.585Z
// Last updated: 2025-02-20T20:50:10.352Z
// Last updated: 2025-02-20T20:50:10.597Z
// Last updated: 2025-02-20T20:50:11.519Z
// Last updated: 2025-02-20T20:50:12.312Z
// Last updated: 2025-02-20T20:50:13.520Z
// Last updated: 2025-02-20T20:50:16.520Z
// Last updated: 2025-02-20T20:50:16.781Z
// Last updated: 2025-02-20T20:50:19.087Z
// Last updated: 2025-02-20T20:50:20.050Z
// Last updated: 2025-02-20T20:50:22.437Z
// Last updated: 2025-02-20T20:50:22.751Z
// Last updated: 2025-02-20T20:50:27.521Z
// Last updated: 2025-02-20T20:50:29.040Z
// Last updated: 2025-02-20T20:50:29.558Z
// Last updated: 2025-02-20T20:50:29.832Z
// Last updated: 2025-02-20T20:50:31.871Z
// Last updated: 2025-02-20T20:50:32.842Z
// Last updated: 2025-02-20T20:50:33.334Z
// Last updated: 2025-02-20T20:50:35.385Z
// Last updated: 2025-02-20T20:50:41.114Z
// Last updated: 2025-02-20T20:58:24.987Z
// Last updated: 2025-02-20T20:58:28.614Z
// Last updated: 2025-02-20T20:58:29.551Z
// Last updated: 2025-02-20T20:58:34.128Z
// Last updated: 2025-02-20T20:58:34.356Z
// Last updated: 2025-02-20T20:58:37.171Z
// Last updated: 2025-02-20T20:58:39.750Z
// Last updated: 2025-02-20T20:58:41.934Z
// Last updated: 2025-02-20T20:58:42.542Z
// Last updated: 2025-02-20T20:58:43.082Z
// Last updated: 2025-02-20T20:58:43.701Z
// Last updated: 2025-02-20T20:58:48.680Z
// Last updated: 2025-02-20T20:58:49.830Z
// Last updated: 2025-02-20T20:58:52.586Z
// Last updated: 2025-02-20T20:58:54.097Z
// Last updated: 2025-02-20T20:58:55.881Z
// Last updated: 2025-02-20T20:58:56.640Z
// Last updated: 2025-02-20T20:58:57.408Z
// Last updated: 2025-02-20T20:58:58.168Z
// Last updated: 2025-02-20T20:59:00.566Z
// Last updated: 2025-02-20T20:59:06.710Z
// Last updated: 2025-02-20T20:59:07.392Z
// Last updated: 2025-02-20T20:59:07.628Z
// Last updated: 2025-02-20T20:59:10.502Z
// Last updated: 2025-02-20T20:59:13.978Z
// Last updated: 2025-02-20T21:41:44.897Z
// Last updated: 2025-02-20T21:41:45.126Z
// Last updated: 2025-02-20T21:41:45.599Z
// Last updated: 2025-02-20T21:41:46.618Z
// Last updated: 2025-02-20T21:41:46.851Z
// Last updated: 2025-02-20T21:41:48.969Z
// Last updated: 2025-02-20T21:41:56.239Z
// Last updated: 2025-02-20T21:41:57.157Z
// Last updated: 2025-02-20T21:41:58.864Z
// Last updated: 2025-02-20T21:42:01.011Z
// Last updated: 2025-02-20T21:42:03.338Z
// Last updated: 2025-02-20T21:42:04.498Z
// Last updated: 2025-02-20T21:42:05.430Z
// Last updated: 2025-02-20T21:42:08.530Z
// Last updated: 2025-02-20T21:42:09.273Z
// Last updated: 2025-02-20T21:42:12.511Z
// Last updated: 2025-02-20T21:42:14.068Z
// Last updated: 2025-02-20T21:42:22.973Z
// Last updated: 2025-02-20T21:42:25.979Z
// Last updated: 2025-02-20T21:42:26.505Z
// Last updated: 2025-02-20T21:42:27.021Z
// Last updated: 2025-02-20T21:42:28.316Z
// Last updated: 2025-02-20T21:42:29.485Z
// Last updated: 2025-02-20T21:42:29.995Z
// Last updated: 2025-02-20T21:42:30.220Z
// Last updated: 2025-02-20T22:08:39.807Z
// Last updated: 2025-02-20T22:08:41.626Z
// Last updated: 2025-02-20T22:08:44.701Z
// Last updated: 2025-02-20T22:08:50.579Z
// Last updated: 2025-02-20T22:08:51.553Z
// Last updated: 2025-02-20T22:08:53.931Z
// Last updated: 2025-02-20T22:08:56.520Z
// Last updated: 2025-02-20T22:08:59.464Z
// Last updated: 2025-02-20T22:09:01.121Z
// Last updated: 2025-02-20T22:09:02.299Z
// Last updated: 2025-02-20T22:09:03.522Z
// Last updated: 2025-02-20T22:09:05.190Z
// Last updated: 2025-02-20T22:09:05.904Z
// Last updated: 2025-02-20T22:09:06.610Z
// Last updated: 2025-02-20T22:09:09.663Z
// Last updated: 2025-02-20T22:09:09.909Z
// Last updated: 2025-02-20T22:09:12.248Z
// Last updated: 2025-02-20T22:09:13.435Z
// Last updated: 2025-02-20T22:09:13.921Z
// Last updated: 2025-02-20T22:09:18.023Z
// Last updated: 2025-02-20T22:09:19.942Z
// Last updated: 2025-02-20T22:09:21.880Z
// Last updated: 2025-02-20T22:09:22.362Z
// Last updated: 2025-02-20T22:09:23.598Z
// Last updated: 2025-02-20T22:09:24.342Z
// Last updated: 2025-02-20T22:09:24.593Z
// Last updated: 2025-02-20T22:09:24.837Z
// Last updated: 2025-02-20T22:14:21.930Z
// Last updated: 2025-02-20T22:14:24.204Z
// Last updated: 2025-02-20T22:14:25.412Z
// Last updated: 2025-02-20T22:14:27.849Z
// Last updated: 2025-02-20T22:14:30.796Z
// Last updated: 2025-02-20T22:14:34.319Z
// Last updated: 2025-02-20T22:14:36.341Z
// Last updated: 2025-02-20T22:14:37.821Z
// Last updated: 2025-02-20T22:14:38.393Z
// Last updated: 2025-02-20T22:14:41.313Z
// Last updated: 2025-02-20T22:14:43.887Z
// Last updated: 2025-02-20T22:14:46.651Z
// Last updated: 2025-02-20T22:14:47.621Z
// Last updated: 2025-02-20T22:14:48.095Z
// Last updated: 2025-02-20T22:14:50.287Z
// Last updated: 2025-02-20T22:14:51.027Z
// Last updated: 2025-02-20T22:14:51.264Z
// Last updated: 2025-02-20T22:14:51.496Z
// Last updated: 2025-02-20T22:14:52.962Z
// Last updated: 2025-02-20T22:14:53.691Z
// Last updated: 2025-02-20T22:14:54.732Z
// Last updated: 2025-02-20T22:14:54.974Z
// Last updated: 2025-02-20T22:14:58.530Z
// Last updated: 2025-02-20T22:14:59.411Z
// Last updated: 2025-02-20T22:15:01.681Z
// Last updated: 2025-02-20T22:15:04.313Z
// Last updated: 2025-02-20T22:15:07.172Z
// Last updated: 2025-02-20T22:15:08.016Z
// Last updated: 2025-02-20T22:15:11.222Z
// Last updated: 2025-02-20T22:15:11.720Z
// Last updated: 2025-02-20T22:15:12.222Z
// Last updated: 2025-02-20T22:15:14.054Z
// Last updated: 2025-02-20T22:15:15.264Z
// Last updated: 2025-02-20T22:15:15.755Z
// Last updated: 2025-02-20T22:15:17.273Z
// Last updated: 2025-02-20T22:15:18.278Z
// Last updated: 2025-02-20T22:15:18.772Z
// Last updated: 2025-02-20T22:15:22.275Z
// Last updated: 2025-02-20T22:15:23.742Z
// Last updated: 2025-02-20T22:15:23.997Z
// Last updated: 2025-02-20T22:15:24.487Z
// Last updated: 2025-02-20T22:15:27.767Z
// Last updated: 2025-02-20T22:15:34.432Z
// Last updated: 2025-02-20T22:17:05.854Z
// Last updated: 2025-02-20T22:17:08.179Z
// Last updated: 2025-02-20T22:17:13.233Z
// Last updated: 2025-02-20T22:17:13.929Z
// Last updated: 2025-02-20T22:17:14.575Z
// Last updated: 2025-02-20T22:17:15.609Z
// Last updated: 2025-02-20T22:17:16.946Z
// Last updated: 2025-02-20T22:17:18.394Z
// Last updated: 2025-02-20T22:17:19.223Z
// Last updated: 2025-02-20T22:17:19.976Z
// Last updated: 2025-02-20T22:17:22.703Z
// Last updated: 2025-02-20T22:17:25.966Z
// Last updated: 2025-02-20T22:17:26.208Z
// Last updated: 2025-02-20T22:17:27.191Z
// Last updated: 2025-02-20T22:17:27.449Z
// Last updated: 2025-02-20T22:17:29.197Z
// Last updated: 2025-02-20T22:17:30.021Z
// Last updated: 2025-02-20T22:17:30.496Z
// Last updated: 2025-02-20T22:17:32.983Z
// Last updated: 2025-02-20T22:17:33.755Z
// Last updated: 2025-02-20T22:17:35.259Z
// Last updated: 2025-02-20T22:17:35.997Z
// Last updated: 2025-02-20T22:17:36.723Z
// Last updated: 2025-02-20T22:17:36.974Z
// Last updated: 2025-02-20T22:17:38.970Z
// Last updated: 2025-02-20T22:17:40.777Z
// Last updated: 2025-02-20T22:17:41.516Z
// Last updated: 2025-02-20T22:17:41.758Z
// Last updated: 2025-02-20T22:17:43.284Z
// Last updated: 2025-02-20T22:17:43.764Z
// Last updated: 2025-02-20T22:17:46.454Z
// Last updated: 2025-02-20T22:17:49.009Z
// Last updated: 2025-02-20T22:17:51.774Z
// Last updated: 2025-02-20T22:17:52.998Z
// Last updated: 2025-02-20T22:17:53.730Z
// Last updated: 2025-02-20T22:17:54.724Z
// Last updated: 2025-02-20T22:17:54.990Z
// Last updated: 2025-02-20T22:17:57.516Z
// Last updated: 2025-02-20T22:17:58.755Z
// Last updated: 2025-02-20T22:18:03.304Z
// Last updated: 2025-02-20T22:18:05.500Z
// Last updated: 2025-02-20T22:18:05.736Z
// Last updated: 2025-02-20T22:18:08.358Z
// Last updated: 2025-02-20T22:18:09.340Z
// Last updated: 2025-02-20T22:18:10.346Z
