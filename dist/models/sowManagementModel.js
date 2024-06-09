"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOW = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const customerModel_1 = require("./customerModel");
class SOW extends sequelize_1.Model {
}
exports.SOW = SOW;
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: customerModel_1.Customer,
            key: 'id',
        },
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    validityPeriod: {
        type: sequelize_1.DataTypes.JSON,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "sows",
    timestamps: false,
});
//# sourceMappingURL=sowManagementModel.js.map