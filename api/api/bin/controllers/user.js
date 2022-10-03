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
exports.addUsers = exports.getCriptosById = exports.getCriptos = void 0;
const index_1 = __importDefault(require("../models/index"));
const { Cripto, User } = index_1.default;
const axios_1 = __importDefault(require("axios"));
const getCriptos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const criptoData = yield Cripto.findAll();
        if (!criptoData)
            return res.status(404).send("error");
        res.status(200).send(criptoData);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCriptos = getCriptos;
const getCriptosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const options = {
            method: 'GET',
            url: 'https://coinlore-cryptocurrency.p.rapidapi.com/api/ticker/',
            params: { id: id },
            headers: {
                'X-RapidAPI-Key': '3eb5bb7b43msh674de93a5bc12d1p19a3afjsn056b747344d2',
                'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com'
            }
        };
        const newValues = yield axios_1.default.request(options);
        if (newValues.data.length === 0) {
            return res.status(404).send("ups something happend");
        }
        else {
            return res.status(200).send(newValues.data);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCriptosById = getCriptosById;
const addUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.create(req.body);
        res.status(200).send({ msg: "usuario creado", data: users });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addUsers = addUsers;
