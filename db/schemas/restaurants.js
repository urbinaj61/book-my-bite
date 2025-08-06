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
    name: { type: String, required: true },
    seats: { type: Number, required: true },
  },
  { _id: false }
);

const MenuLinkSchema = new Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
  },
  { _id: false }
);

const ImageSchema = new Schema(
  {
    imageUrl: { type: String },
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
  },
  { timestamps: true }
);

const Restaurant = models.Restaurant || model("Restaurant", RestaurantSchema);

export default Restaurant;
