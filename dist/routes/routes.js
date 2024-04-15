"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StockController_1 = require("../controllers/StockController");
const router = require('express').Router();
require('dotenv').config();
//test route
router.get('/test', (req, res) => {
    res.send('Hello from the backend!');
});
// fetch single stock route
router.get("/fetchSingleStock", StockController_1.fetchSingleStockController);
// fetch all stocks route 
router.get("/fetchAllStocks", StockController_1.fetchAllStocksController);
exports.default = router;
