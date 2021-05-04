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
