import { Schema, model, models } from "mongoose";

const TimeSlotSchema = new Schema(
  {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  { _id: false }
);

const OpeningTimeSchema = new Schema(
  {
    day: {
      type: String,
      required: true,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    open: { type: String, required: true },
    close: { type: String, required: true },
    timeSlots: [TimeSlotSchema],
  },
  { _id: false }
);

const TableTypeSchema = new Schema(
  {
    table: { type: String, required: true },
    seats: { type: Number, required: true },
  },
  { _id: false }
);

const MenuLinkSchema = new Schema(
  {
    url: { type: String, required: true },
    assetId: { type: String, required: true },
    original_filename: { type: String, required: true },
  },
  { _id: false }
);

const ImageSchema = new Schema(
  {
    url: { type: String },
    assetId: { type: String, required: true },
    original_filename: { type: String, required: true },
  },
  { _id: false }
);

const RestaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, default: "" },
    postCode: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    cuisine: { type: String, required: true },
    type: { type: String, required: true },
    images: [ImageSchema],
    tableTypes: [TableTypeSchema],
    menuLinks: [MenuLinkSchema],
    openingTimes: [OpeningTimeSchema],
    timeSlotInterval: { type: String, required: true },
  },
  { timestamps: true }
);

const Restaurant = models.Restaurant || model("Restaurant", RestaurantSchema);

export default Restaurant;
