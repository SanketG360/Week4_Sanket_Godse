import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Organization } from './organizationModel';
import { v4 as uuidv4 } from 'uuid';
import { Customer } from './customerModel';


interface SowAttributes {
    id: string;
    invoiceEmailAddresses: string[];
    customerId: string;
    customerPONumber: string;
    title: string;
    customerSONumber: string;
    validityPeriod: { validFrom: Date; validUpto: Date };
    totalValue: number;
    currency: string;
  }
  
  class SOW extends Model<SowAttributes> implements SowAttributes  
  {
    public id!: string;
    public invoiceEmailAddresses!: string[];
    public customerId!: string;
    public customerPONumber!: string;
    public title!: string;
    public customerSONumber!: string;
    public validityPeriod!: { validFrom: Date; validUpto: Date };
    public totalValue!: number;
    public currency!: string;
  }
  

  SOW.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      invoiceEmailAddresses: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      customerId: {
        type: DataTypes.STRING,
        references: {
          model: Customer,
          key: 'id',
        },
      },
      customerPONumber: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      customerSONumber: {
        type: DataTypes.STRING,
      },
      validityPeriod: {
        type: DataTypes.JSON,
      },
      totalValue: {
        type: DataTypes.FLOAT,
      },
      currency: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "sows",
      timestamps: false,
    }
  );
  
  
export { SOW };