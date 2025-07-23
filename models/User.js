import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String },
  username: { type: String, required: true },
  profilepic: { type: String },
  razorpayid: { type: String },
  razorpaysecret: { type: String },
}, { timestamps: true });

// Fix OverwriteModelError by checking if model exists
export default mongoose.models.User || mongoose.model("User", UserSchema);
