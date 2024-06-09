"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Organization extends sequelize_1.Model {
}
exports.Organization = Organization;
Organization.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
    },
    invoiceTemplateId: {
        type: sequelize_1.DataTypes.STRING,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "organizations",
    timestamps: false,
});
//# sourceMappingURL=organizationModel.js.map