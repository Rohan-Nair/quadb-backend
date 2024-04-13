import axios from "axios";
import { Request, Response } from "express";
import cron from 'node-cron';

const router = require('express').Router();
require('dotenv').config();

router.get('/test', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// const fetchAllStocks = async () => {
//     const apiURL = `https://api.wazirx.com/api/v2/tickers`
//     // fetch the data from the API every 5 minutes using axios 
//     const response = await axios.get(apiURL)
//     const data = response.data;
//     return data;
// }

// cron.schedule('*/5 * * * *', fetchAllStocks);


// router.get('/fetchAllStocks', (req: Request, res: Response) => {
//     const apiURL = `https://api.wazirx.com/api/v2/tickers`
//     // fetch the data from the API every 5 minutes using axios 
//     const response = axios.get(apiURL)
//     const data = response.data;
//     console.log(data);



//     // fetch(apiURL)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log(data);
//     //         res.send(data).status(200);
//     //     })
//     //     .catch(error => {
//     //         res.send(error);
//     //     });
// }
// );

export default router;
