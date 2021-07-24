import Letter from "../models/Letter";
import { ILetter } from "../interfaces/ILetter";

const getAllLetter = async () => {
    try {
        const letters = Letter.find().sort({ createdAt: -1 });
        return letters;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const addLetter = async (data: ILetter) => {
    const { name, letter, avartar } = data;
    try {
        const newLetter = await Letter.create({
            name, letter, avartar
        });
        const allLetters = await Letter.find().sort({ createdAt: -1 });
        return allLetters;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    getAllLetter,
    addLetter
}