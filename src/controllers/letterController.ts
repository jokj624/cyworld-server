import { Request, Response } from "express";
import { letterService } from "../services";
const sc = require('../modules/statusCode');

const addLetter = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        const response = await letterService.addLetter(data);
        return res.status(sc.OK).json({
            status: sc.OK,
            success: true,
            message: "방명록 추가 성공",
            data: response
        });
    } catch (error) {
        console.log(error);
        res.status(sc.INTERNAL_SERVER_ERROR).json({
            status: sc.INTERNAL_SERVER_ERROR,
            success: false,
            message: "서버 내부 오류"
        });
    }
};

const getLetter = async (req: Request, res: Response) => {
    try {
        const response = await letterService.getAllLetter();
        return res.status(sc.OK).json({
            status: sc.OK,
            success: true,
            message: "방명록 추가 성공",
            data: response
        });
    } catch (error) {
        console.log(error);
        res.status(sc.INTERNAL_SERVER_ERROR).json({
            status: sc.INTERNAL_SERVER_ERROR,
            success: false,
            message: "서버 내부 오류"
        });
    }
};

export default {
    addLetter,
    getLetter
}