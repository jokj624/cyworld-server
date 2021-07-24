import Guest from "../models/Guest";
import { IGuest } from "../interfaces/IGuest";

const getAllGuest = async () => {
    try {
        const guests = Guest.find().sort({ createdAt: -1 });
        return guests;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const addGuest = async (data: IGuest) => {
    const { name, content } = data;
    try {
        const newGuest = await Guest.create({
            name, content
        });
        const allGuests = await Guest.find().sort({ createdAt: -1 });
        return allGuests;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    getAllGuest,
    addGuest
}