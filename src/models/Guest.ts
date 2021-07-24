import mongoose from "mongoose";
import { IGuest } from "../interfaces/IGuest";

const GuestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

export default mongoose.model<IGuest & mongoose.Document>("Guest", GuestSchema);