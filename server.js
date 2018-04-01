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
