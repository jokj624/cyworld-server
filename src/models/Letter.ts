import mongoose from "mongoose";
import { ILetter } from "../interfaces/ILetter";

const LetterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    letter: {
        type: String,
        required: true
    },
    avartar: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model<ILetter & mongoose.Document>("Letter", LetterSchema);