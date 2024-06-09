"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOWPaymentPlan = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sowManagementModel_1 = require("./sowManagementModel");
const customerModel_1 = require("./customerModel");
class SOWPaymentPlan extends sequelize_1.Model {
}
exports.SOWPaymentPlan = SOWPaymentPlan;
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowManagementModel_1.SOW,
            key: 'id',
        },
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: customerModel_1.Customer,
            key: 'id',
        },
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "payment_plans",
    timestamps: false,
});
//# sourceMappingURL=sowPayPlan.js.map