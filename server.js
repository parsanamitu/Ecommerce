import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Last updated: 2025-02-20T20:40:07.382Z
// Last updated: 2025-02-20T20:42:20.491Z
// Last updated: 2025-02-20T20:42:22.520Z
// Last updated: 2025-02-20T20:42:23.041Z
// Last updated: 2025-02-20T20:42:24.741Z
// Last updated: 2025-02-20T20:42:25.871Z
// Last updated: 2025-02-20T20:42:26.535Z
// Last updated: 2025-02-20T20:42:27.461Z
// Last updated: 2025-02-20T20:42:29.943Z
// Last updated: 2025-02-20T20:42:30.390Z
// Last updated: 2025-02-20T20:42:32.630Z
// Last updated: 2025-02-20T20:42:35.185Z
// Last updated: 2025-02-20T20:42:35.632Z
// Last updated: 2025-02-20T20:42:36.312Z
// Last updated: 2025-02-20T20:42:36.760Z
// Last updated: 2025-02-20T20:42:38.990Z
// Last updated: 2025-02-20T20:49:47.727Z
// Last updated: 2025-02-20T20:49:48.189Z
// Last updated: 2025-02-20T20:49:50.036Z
// Last updated: 2025-02-20T20:49:51.630Z
// Last updated: 2025-02-20T20:49:52.700Z
// Last updated: 2025-02-20T20:49:56.331Z
// Last updated: 2025-02-20T20:49:56.867Z
// Last updated: 2025-02-20T20:49:59.493Z
// Last updated: 2025-02-20T20:50:01.857Z
// Last updated: 2025-02-20T20:50:02.554Z
// Last updated: 2025-02-20T20:50:02.810Z
// Last updated: 2025-02-20T20:50:04.426Z
// Last updated: 2025-02-20T20:50:13.287Z
// Last updated: 2025-02-20T20:50:14.694Z
// Last updated: 2025-02-20T20:50:14.942Z
// Last updated: 2025-02-20T20:50:15.415Z
// Last updated: 2025-02-20T20:50:20.282Z
// Last updated: 2025-02-20T20:50:21.629Z
// Last updated: 2025-02-20T20:50:24.386Z
// Last updated: 2025-02-20T20:50:25.696Z
// Last updated: 2025-02-20T20:50:26.268Z
// Last updated: 2025-02-20T20:50:26.981Z
// Last updated: 2025-02-20T20:50:28.784Z
// Last updated: 2025-02-20T20:50:32.582Z
// Last updated: 2025-02-20T20:50:33.587Z
// Last updated: 2025-02-20T20:50:34.200Z
// Last updated: 2025-02-20T20:50:36.443Z
// Last updated: 2025-02-20T20:50:39.267Z
// Last updated: 2025-02-20T20:50:39.537Z
// Last updated: 2025-02-20T20:50:40.095Z
// Last updated: 2025-02-20T20:50:40.602Z
// Last updated: 2025-02-20T20:50:41.388Z
// Last updated: 2025-02-20T20:58:24.518Z
// Last updated: 2025-02-20T20:58:27.433Z
// Last updated: 2025-02-20T20:58:27.667Z
// Last updated: 2025-02-20T20:58:31.318Z
// Last updated: 2025-02-20T20:58:33.431Z
// Last updated: 2025-02-20T20:58:35.286Z
// Last updated: 2025-02-20T20:58:35.895Z
// Last updated: 2025-02-20T20:58:36.157Z
// Last updated: 2025-02-20T20:58:36.410Z
// Last updated: 2025-02-20T20:58:37.424Z
// Last updated: 2025-02-20T20:58:37.937Z
// Last updated: 2025-02-20T20:58:42.814Z
// Last updated: 2025-02-20T20:58:46.739Z
// Last updated: 2025-02-20T20:58:47.178Z
// Last updated: 2025-02-20T20:58:50.195Z
// Last updated: 2025-02-20T20:58:53.209Z
// Last updated: 2025-02-20T20:58:54.872Z
// Last updated: 2025-02-20T20:58:59.287Z
// Last updated: 2025-02-20T20:59:01.059Z
// Last updated: 2025-02-20T20:59:03.086Z
// Last updated: 2025-02-20T20:59:03.595Z
// Last updated: 2025-02-20T20:59:04.080Z
// Last updated: 2025-02-20T20:59:05.514Z
// Last updated: 2025-02-20T20:59:08.847Z
// Last updated: 2025-02-20T20:59:09.566Z
// Last updated: 2025-02-20T20:59:11.725Z
// Last updated: 2025-02-20T20:59:12.525Z
// Last updated: 2025-02-20T20:59:14.531Z
// Last updated: 2025-02-20T20:59:16.382Z
// Last updated: 2025-02-20T21:41:45.835Z
// Last updated: 2025-02-20T21:41:46.064Z
// Last updated: 2025-02-20T21:41:47.312Z
// Last updated: 2025-02-20T21:41:48.488Z
// Last updated: 2025-02-20T21:41:50.128Z
// Last updated: 2025-02-20T21:41:51.304Z
// Last updated: 2025-02-20T21:41:52.049Z
// Last updated: 2025-02-20T21:41:52.746Z
// Last updated: 2025-02-20T21:41:54.844Z
// Last updated: 2025-02-20T21:41:55.075Z
// Last updated: 2025-02-20T21:41:57.382Z
// Last updated: 2025-02-20T21:41:57.602Z
// Last updated: 2025-02-20T21:41:59.095Z
// Last updated: 2025-02-20T21:41:59.552Z
// Last updated: 2025-02-20T21:42:00.546Z
// Last updated: 2025-02-20T21:42:01.702Z
// Last updated: 2025-02-20T21:42:02.642Z
// Last updated: 2025-02-20T21:42:03.104Z
// Last updated: 2025-02-20T21:42:03.560Z
// Last updated: 2025-02-20T21:42:06.752Z
// Last updated: 2025-02-20T21:42:07.787Z
// Last updated: 2025-02-20T21:42:12.243Z
// Last updated: 2025-02-20T21:42:16.144Z
// Last updated: 2025-02-20T21:42:16.387Z
// Last updated: 2025-02-20T21:42:17.310Z
// Last updated: 2025-02-20T21:42:17.768Z
// Last updated: 2025-02-20T21:42:18.234Z
// Last updated: 2025-02-20T21:42:18.698Z
// Last updated: 2025-02-20T21:42:19.881Z
// Last updated: 2025-02-20T21:42:25.213Z
// Last updated: 2025-02-20T21:42:25.705Z
// Last updated: 2025-02-20T21:42:26.771Z
// Last updated: 2025-02-20T21:42:27.269Z
// Last updated: 2025-02-20T21:42:27.533Z
// Last updated: 2025-02-20T22:08:38.508Z
// Last updated: 2025-02-20T22:08:38.986Z
// Last updated: 2025-02-20T22:08:42.804Z
// Last updated: 2025-02-20T22:08:52.256Z
// Last updated: 2025-02-20T22:08:52.966Z
// Last updated: 2025-02-20T22:08:53.447Z
// Last updated: 2025-02-20T22:08:55.090Z
// Last updated: 2025-02-20T22:08:55.324Z
// Last updated: 2025-02-20T22:08:57.315Z
// Last updated: 2025-02-20T22:08:57.797Z
// Last updated: 2025-02-20T22:08:58.769Z
// Last updated: 2025-02-20T22:08:59.926Z
// Last updated: 2025-02-20T22:09:02.533Z
// Last updated: 2025-02-20T22:09:04.732Z
// Last updated: 2025-02-20T22:09:08.137Z
// Last updated: 2025-02-20T22:09:08.642Z
// Last updated: 2025-02-20T22:09:10.145Z
// Last updated: 2025-02-20T22:09:13.697Z
// Last updated: 2025-02-20T22:09:16.375Z
// Last updated: 2025-02-20T22:09:19.484Z
// Last updated: 2025-02-20T22:09:21.628Z
// Last updated: 2025-02-20T22:09:23.095Z
// Last updated: 2025-02-20T22:09:23.359Z
// Last updated: 2025-02-20T22:09:24.095Z
// Last updated: 2025-02-20T22:14:18.848Z
// Last updated: 2025-02-20T22:14:19.623Z
// Last updated: 2025-02-20T22:14:21.422Z
// Last updated: 2025-02-20T22:14:27.127Z
// Last updated: 2025-02-20T22:14:28.092Z
// Last updated: 2025-02-20T22:14:28.592Z
// Last updated: 2025-02-20T22:14:29.313Z
// Last updated: 2025-02-20T22:14:32.019Z
// Last updated: 2025-02-20T22:14:35.062Z
// Last updated: 2025-02-20T22:14:35.301Z
// Last updated: 2025-02-20T22:14:36.097Z
// Last updated: 2025-02-20T22:14:36.841Z
// Last updated: 2025-02-20T22:14:39.104Z
// Last updated: 2025-02-20T22:14:39.594Z
// Last updated: 2025-02-20T22:14:43.065Z
// Last updated: 2025-02-20T22:14:43.391Z
// Last updated: 2025-02-20T22:14:49.066Z
// Last updated: 2025-02-20T22:14:50.531Z
// Last updated: 2025-02-20T22:14:50.770Z
// Last updated: 2025-02-20T22:14:52.224Z
// Last updated: 2025-02-20T22:14:54.168Z
// Last updated: 2025-02-20T22:14:55.213Z
// Last updated: 2025-02-20T22:14:56.992Z
// Last updated: 2025-02-20T22:15:01.390Z
// Last updated: 2025-02-20T22:15:01.957Z
// Last updated: 2025-02-20T22:15:04.600Z
// Last updated: 2025-02-20T22:15:06.348Z
// Last updated: 2025-02-20T22:15:07.721Z
// Last updated: 2025-02-20T22:15:08.286Z
// Last updated: 2025-02-20T22:15:09.129Z
// Last updated: 2025-02-20T22:15:10.251Z
// Last updated: 2025-02-20T22:15:12.456Z
// Last updated: 2025-02-20T22:15:17.514Z
// Last updated: 2025-02-20T22:15:17.783Z
// Last updated: 2025-02-20T22:15:18.043Z
// Last updated: 2025-02-20T22:15:19.512Z
// Last updated: 2025-02-20T22:15:22.518Z
// Last updated: 2025-02-20T22:15:23.273Z
// Last updated: 2025-02-20T22:15:25.213Z
// Last updated: 2025-02-20T22:15:25.828Z
// Last updated: 2025-02-20T22:15:27.528Z
// Last updated: 2025-02-20T22:15:28.273Z
// Last updated: 2025-02-20T22:15:29.793Z
// Last updated: 2025-02-20T22:15:30.049Z
// Last updated: 2025-02-20T22:15:35.181Z
// Last updated: 2025-02-20T22:17:05.591Z
// Last updated: 2025-02-20T22:17:06.599Z
