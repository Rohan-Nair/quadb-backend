import { Request, Response } from "express";
import { fetchSingleStockController } from "../controllers/CurrencyController";

const router = require('express').Router();
require('dotenv').config();

//test route
router.get('/test', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

// fetch single stock route
router.get("/fetchSingleStock", fetchSingleStockController);

export default router;
