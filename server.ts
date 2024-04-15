import express from "express"
import routes from "./routes/routes";

import axios from "axios";
import cron from 'node-cron';
import { connect } from "./db/dbConfig";
import CurrencyPair from "./models/CurrencyModel";
import cors from "cors";

// creating the app 
const app = express();

app.use(cors());

// connection to the database
connect();

app.use("/api", routes)
app.use("/", async (req, res) => {
    res.json("hello world");
})

interface ApiData {
    base_unit: string,
    quote_unit: string,
    low: number,
    high: number,
    last: number,
    type: string,
    open: number,
    volume: number,
    sell: number,
    buy: number,
    at: number,
    name: string
}

interface ApiResponse {
    [key: string]: ApiData
}

const fetchAllStocks = async () => {
    console.log("fetching");
    const apiURL = `https://api.wazirx.com/api/v2/tickers`
    const response = await axios.get(apiURL)
    const data: ApiResponse = response.data;

    const shortenedData: ApiResponse = {};
    Object.keys(data).slice(0, 10).map((key) => {
        shortenedData[key] = data[key];
    })
    // add this shortenedData to the database
    Object.keys(shortenedData).forEach(async (key) => {
        const currencyPairData = data[key];
        await CurrencyPair.findOneAndUpdate(
            { _id: key },
            { data: currencyPairData },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
    });
    console.log("Data added to the database");
}
fetchAllStocks();
cron.schedule('*/5 * * * *', fetchAllStocks);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});