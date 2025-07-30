import { Schema, model, models } from "mongoose";

const BookingSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    customerEmail: { type: String, required: true },
    customerName: { type: String, required: true },
    dateBooked: { type: String, default: "" },
    tableBooked: { type: String, required: true },
    seatsBooked: { type: String, required: true },
    timeSlot: {
      start: {
        type: String,
        required: true,
      },
      end: {
        type: String,
        required: true,
      },
    },
  },

  { timestamps: true }
);

const Booking = models.Booking || model("Booking", BookingSchema);

export default Booking;
