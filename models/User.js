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
