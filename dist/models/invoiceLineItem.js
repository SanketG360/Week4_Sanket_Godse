"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineItem = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const invoiceModel_1 = require("./invoiceModel");
class InvoiceLineItem extends sequelize_1.Model {
}
exports.InvoiceLineItem = InvoiceLineItem;
InvoiceLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: invoiceModel_1.Invoice,
            key: 'id',
        },
    },
    orderNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'invoice_line_items',
    timestamps: false,
});
//# sourceMappingURL=invoiceLineItem.js.map