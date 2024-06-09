"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const credential = {
    postgres: {
        USERNAME: process.env.USER || '',
        DATABASE: process.env.DATABASE || '',
        HOST: process.env.HOST || '',
        PASSWORD: process.env.PASSWORD || "",
        DB_PORT: Number(process.env.DATABASE_PORT) || 5432,
    }
};
exports.default = credential;
//# sourceMappingURL=credentials.js.map