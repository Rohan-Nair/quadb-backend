"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const currencySchema = new mongoose_1.default.Schema({
    base_unit: { type: String, required: true },
    quote_unit: { type: String, required: true },
    low: { type: Number, required: true },
    high: { type: Number, required: true },
    last: { type: Number, required: true },
    type: { type: String, required: true },
    open: { type: Number, required: true },
    volume: { type: Number, required: true },
    sell: { type: Number, required: true },
    buy: { type: Number, required: true },
    at: { type: Number, required: true },
    name: { type: String, required: true }
}, { _id: false });
const currencyPairSchema = new mongoose_1.default.Schema({
    _id: { type: String, required: true },
    data: currencySchema
}, { _id: true });
const CurrencyPair = mongoose_1.default.model('CurrencyPair', currencyPairSchema);
exports.default = CurrencyPair;
