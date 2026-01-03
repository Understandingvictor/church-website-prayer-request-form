import mongoose, { Model } from "mongoose";

const PrayerSchema = new mongoose.Schema(
  {
    prayerRequest: {
      type: String,
      required: [true, "Please provide the prayer details."],
      maxlength: [2000, "Prayer request cannot be more than 2000 characters"],
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    viewed: { type: Boolean, default: false }, // New field
  },
  { timestamps: true });

// Check if the model already exists in the Mongoose cache
// If it does, use it. If not, compile the model.
const Prayer: Model<any> = mongoose.models.Prayer || mongoose.model("Prayer", PrayerSchema);

export default Prayer;