import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },

    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

reviewSchema.index({ orderId: 1, productId: 1, memberId: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema, "reviews");
