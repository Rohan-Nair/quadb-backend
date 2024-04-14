import { Request, Response } from "express";
import CurrencyPair from "../models/CurrencyModel";

export const fetchSingleStockController = async (req: Request, res: Response) => {
    const { name } = req.body;
    const currencyPair = await CurrencyPair.findOne(
        { 'data.name': name }
    )
    console.log(currencyPair);
    res.send(currencyPair);
};
