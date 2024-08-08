import { Response } from "express";
// import ERROR_CODE from "./constants/ERROR_CODE";
// import ERROR_MESSAGE from "./constants/ERROR_MESSAGE";

export default function errorHandler(res: Response, error: Error){
    const message = error.message

    return res
    .status(500)
    .json({ error: message });
}