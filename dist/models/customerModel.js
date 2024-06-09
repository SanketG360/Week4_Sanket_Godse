"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const organizationModel_1 = require("./organizationModel");
const invoiceLineItem_1 = require("./invoiceLineItem");
const invoiceModel_1 = require("./invoiceModel");
const paymentModel_1 = require("./paymentModel");
const sowManagementModel_1 = require("./sowManagementModel");
const sowPayPlan_1 = require("./sowPayPlan");
class Customer extends sequelize_1.Model {
}
exports.Customer = Customer;
Customer.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    organizationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: organizationModel_1.Organization,
            key: 'id',
        },
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isNdaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMsaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "customer",
    timestamps: false,
});
sowManagementModel_1.SOW.hasMany(sowPayPlan_1.SOWPaymentPlan, { foreignKey: 'sowId' });
sowPayPlan_1.SOWPaymentPlan.belongsTo(sowManagementModel_1.SOW, { foreignKey: 'sowId' });
invoiceLineItem_1.InvoiceLineItem.belongsTo(invoiceModel_1.Invoice, { foreignKey: 'invoiceId' });
invoiceModel_1.Invoice.hasMany(invoiceLineItem_1.InvoiceLineItem, { foreignKey: 'invoiceId' });
paymentModel_1.Payment.belongsTo(invoiceModel_1.Invoice, { foreignKey: 'InvoiceId' });
invoiceModel_1.Invoice.hasMany(paymentModel_1.Payment, { foreignKey: 'InvoiceId' });
//# sourceMappingURL=customerModel.js.map