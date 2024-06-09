import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { SOW } from './sowManagementModel';
import { SOWPaymentPlan } from './sowPayPlan';
import { Customer } from './customerModel';

interface InvoiceAttributes {
  id: string;
  totalInvoiceValue: number;
  sowId: string;
  status: string;
  sowPaymentPlanId: string;
  invoiceSentOn: Date | null;
  customerId: string;
  paymentReceivedOn: Date | null;
  invoiceVersionNo: number;
  paymentId: string | null;
  invoiceAmount: number;
  invoiceTaxAmount: number;
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: string;
  public totalInvoiceValue!: number;
  public sowId!: string;
  public status!: string;
  public sowPaymentPlanId!: string;
  public invoiceSentOn!: Date | null;
  public customerId!: string;
  public paymentReceivedOn!: Date | null;
  public invoiceVersionNo!: number;
  public paymentId!: string | null;
  public invoiceAmount!: number;
  public invoiceTaxAmount!: number;
}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    totalInvoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Customer,
        key: 'id',
      },
    },
    paymentReceivedOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceVersionNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceTaxAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoices',
    timestamps: false,
  }
);

export { Invoice };
