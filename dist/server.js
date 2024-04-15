"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const axios_1 = __importDefault(require("axios"));
const node_cron_1 = __importDefault(require("node-cron"));
const dbConfig_1 = require("./db/dbConfig");
const CurrencyModel_1 = __importDefault(require("./models/CurrencyModel"));
const cors_1 = __importDefault(require("cors"));
// creating the app 
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// connection to the database
(0, dbConfig_1.connect)();
const fetchAllStocks = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("fetching");
    const apiURL = `https://api.wazirx.com/api/v2/tickers`;
    const response = yield axios_1.default.get(apiURL);
    const data = response.data;
    const shortenedData = {};
    Object.keys(data).slice(0, 10).map((key) => {
        shortenedData[key] = data[key];
    });
    // add this shortenedData to the database
    Object.keys(shortenedData).forEach((key) => __awaiter(void 0, void 0, void 0, function* () {
        const currencyPairData = data[key];
        yield CurrencyModel_1.default.findOneAndUpdate({ _id: key }, { data: currencyPairData }, { upsert: true, new: true, setDefaultsOnInsert: true });
    }));
    console.log("Data added to the database");
});
fetchAllStocks();
node_cron_1.default.schedule('*/5 * * * *', fetchAllStocks);
app.use("/api", routes_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
