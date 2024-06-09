"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SowPaymentPlanItem = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sowPayPlan_1 = require("./sowPayPlan");
const sowManagementModel_1 = require("./sowManagementModel");
class SowPaymentPlanItem extends sequelize_1.Model {
}
exports.SowPaymentPlanItem = SowPaymentPlanItem;
SowPaymentPlanItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: sowPayPlan_1.SOWPaymentPlan,
            key: 'id',
        },
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: sowManagementModel_1.SOW,
            key: 'id',
        },
    },
    orderId: {
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
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "sow_payment_plan_items",
    timestamps: false,
});
//# sourceMappingURL=sowPayPlanLineItem.js.map