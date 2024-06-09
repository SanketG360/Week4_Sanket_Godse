"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const invoiceModel_1 = require("./invoiceModel");
class Payment extends sequelize_1.Model {
}
exports.Payment = Payment;
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    PaymentDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ForExAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    Currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IndianAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    InvoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: invoiceModel_1.Invoice,
            key: 'id',
        },
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    BankPayment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Details: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'payments',
    timestamps: false,
});
//# sourceMappingURL=paymentModel.js.map