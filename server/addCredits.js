import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import User from "./models/user.model.js";

async function addCredits() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const result = await User.updateMany({}, { $set: { credits: 1000 } });
    console.log("SUCCESS: All users credited with 1000 credits!", result);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

addCredits();
