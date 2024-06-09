import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Organization } from './organizationModel';
import { v4 as uuidv4 } from 'uuid';
import { InvoiceLineItem } from './invoiceLineItem';
import { Invoice } from './invoiceModel';
import { Payment } from './paymentModel';
import { SOW } from './sowManagementModel';
import { SOWPaymentPlan } from './sowPayPlan';
import { SowPaymentPlanItem } from './sowPayPlanLineItem';


interface CustomerAttributes {
    id: string;
    organizationId: string;
    msaValidFrom: Date;
    msaValidUpto: Date;
    legalName: string;
    ndaSignedOn: Date;
    shortName: string;
    ndaValidFrom: Date;
    ndaValidUpto: Date;
    addressId: string;
    displayName: string;
    isNdaSigned: boolean;
    isMsaSigned: boolean;
    msaSignedOn: Date;
  }
  
  class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
    public id!: string;
    public organizationId!: string;
    public msaValidFrom!: Date;
    public msaValidUpto!: Date;
    public legalName!: string;
    public ndaSignedOn!: Date;
    public shortName!: string;
    public ndaValidFrom!: Date;
    public ndaValidUpto!: Date;
    public addressId!: string;
    public displayName!: string;
    public isNdaSigned!: boolean;
    public isMsaSigned!: boolean;
    public msaSignedOn!: Date;
  }
  

Customer.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      organizationId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: Organization,
          key: 'id',
        },
      },
      msaValidFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      msaValidUpto: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      legalName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ndaSignedOn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      shortName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ndaValidFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ndaValidUpto: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      addressId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isNdaSigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isMsaSigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      msaSignedOn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "customer",
      timestamps: false,
    }
  );
  

SOW.hasMany(SOWPaymentPlan,{foreignKey:'sowId'});
SOWPaymentPlan.belongsTo(SOW,{foreignKey:'sowId'});
InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'invoiceId' });
Invoice.hasMany(InvoiceLineItem, { foreignKey: 'invoiceId' });
Payment.belongsTo(Invoice, { foreignKey: 'InvoiceId' });
Invoice.hasMany(Payment, { foreignKey: 'InvoiceId' });


export { Customer };
  