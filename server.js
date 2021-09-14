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
