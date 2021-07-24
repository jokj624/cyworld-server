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
    }
});

export default mongoose.model<ILetter & mongoose.Document>("Letter", LetterSchema);