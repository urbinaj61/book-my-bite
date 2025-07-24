import { Schema, model, models } from "mongoose";

const TimeSlotSchema = new Schema(
  {
    start: { type: String, required: true },
    end: { type: String, required: true },
    booked: { type: Boolean, default: false },
  },
  { _id: false }
);

const OpeningTimeSchema = new Schema(
  {
    day: { type: String, required: true },
    available: { type: Boolean, default: false },
    open: { type: String, required: true },
    close: { type: String, required: true },
    timeSlots: [TimeSlotSchema],
  },
  { _id: false }
);

const TableTypeSchema = new Schema(
  {
    type: { type: String, required: true },
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

const RestaurantsSchema = new Schema(
  {
    name: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, default: "" },
    postCode: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },

    tableTypes: [TableTypeSchema],
    menuLinks: [MenuLinkSchema],
    openingTimes: [OpeningTimeSchema],
  },
  { timestamps: true }
);

const Restaurants =
  models.Restaurants || model("Restaurants", RestaurantsSchema);

export default Restaurants;
