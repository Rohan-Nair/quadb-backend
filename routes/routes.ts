import { Request, Response } from "express";
import { fetchAllStocksController, fetchSingleStockController } from "../controllers/StockController";

const router = require('express').Router();
require('dotenv').config();

//test route
router.get('/test', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

// fetch single stock route
router.get("/fetchSingleStock", fetchSingleStockController);

// fetch all stocks route 
router.get("/fetchAllStocks", fetchAllStocksController);

export default router;
