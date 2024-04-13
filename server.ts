import express from "express"
import routes from "./routes/routes";

import axios from "axios";
import cron from 'node-cron';

// creating the app 
const app = express();

app.use("/api", routes)


const fetchAllStocks = async () => {
    console.log("fetching");
    const apiURL = `https://api.wazirx.com/api/v2/tickers`
    // fetch the data from the API every 5 minutes using axios 
    const response = await axios.get(apiURL)
    console.log(response.data);
    const data = response.data;
    return data;
}
// fetchAllStocks();
// cron.schedule('*/5 * * * *', fetchAllStocks);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});