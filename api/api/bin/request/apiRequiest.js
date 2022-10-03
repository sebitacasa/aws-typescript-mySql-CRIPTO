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
const axios_1 = __importDefault(require("axios"));
const models_1 = __importDefault(require("../models"));
const { Cripto } = models_1.default;
const apiCall = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const options = {
        method: "GET",
        url: "https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/",
        params: { start: "0", limit: "100" },
        headers: {
            "X-RapidAPI-Key": "3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2",
            "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
        },
    };
    const value = yield axios_1.default.request(options);
    const newValues = (_a = value.data.data) === null || _a === void 0 ? void 0 : _a.map((el) => {
        return {
            id: el.id,
            name: el.name,
            rank: el.rank,
            price_usd: el.price_usd,
            percent_change_24h: el.percent_change_24h,
            price_btc: el.price_btc,
            market_cap_usd: el.market_cap_usd,
        };
    });
    //return newValues
    const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
        // let data = {cripto: payload}
        if (!payload)
            throw Error;
        else {
            const ingredient = yield Cripto.bulkCreate(payload);
            return ingredient;
        }
    });
    create(newValues);
});
exports.default = apiCall;
