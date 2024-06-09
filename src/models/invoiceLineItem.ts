import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Invoice } from './invoiceModel';

interface InvoiceLineItemAttributes {
  id: string;
  invoiceId: string;
  orderNo: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes> implements InvoiceLineItemAttributes {
  public id!: string;
  public invoiceId!: string;
  public orderNo!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Invoice,
        key: 'id',
      },
    },
    orderNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoice_line_items',
    timestamps: false,
  }
);



export { InvoiceLineItem };
