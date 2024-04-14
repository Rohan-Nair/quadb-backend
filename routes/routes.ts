import { Request, Response } from "express";
import CurrencyPair from "../models/CurrencyModel";

const router = require('express').Router();
require('dotenv').config();

router.get('/test', (req: Request, res: Response) => {
    res.send('Hello World!');
});


router.get("/fetchSingleStock", async (req: Request, res: Response) => {
    const { name } = req.body;
    const currencyPair = await CurrencyPair.findOne(
        { 'data.name': name }
    )
    console.log(currencyPair);
    res.send(currencyPair);
});

export default router;
