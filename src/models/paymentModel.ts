import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Invoice } from './invoiceModel';

interface PaymentAttributes {
  id: string;
  PaymentDate: Date;
  ForExAmount: number;
  Currency: string;
  IndianAmount: number;
  InvoiceId: string;
  isFullPayment: boolean;
  BankPayment: string;
  Details: string;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
  public id!: string;
  public PaymentDate!: Date;
  public ForExAmount!: number;
  public Currency!: string;
  public IndianAmount!: number;
  public InvoiceId!: string;
  public isFullPayment!: boolean;
  public BankPayment!: string;
  public Details!: string;
}

Payment.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    PaymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ForExAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IndianAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    InvoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Invoice,
        key: 'id',
      },
    },
    isFullPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    BankPayment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'payments',
    timestamps: false,
  }
);


export { Payment };
