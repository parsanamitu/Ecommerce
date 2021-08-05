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
