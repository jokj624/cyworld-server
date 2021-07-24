import Letter from "../models/Letter";
import { ILetter } from "../interfaces/ILetter";

const getAllLetter = async () => {
    try {
        const letters = Letter.find();
        return letters;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const addLetter = async (data: ILetter) => {
    const { name, letter } = data;
    try {
        const newLetter = await Letter.create({
            name, letter
        });
        const allLetters = await Letter.find();
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