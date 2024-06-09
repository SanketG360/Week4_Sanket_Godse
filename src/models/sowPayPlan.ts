import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { SOW } from './sowManagementModel';
import { Customer } from './customerModel';

interface sowPaymentPlanAttributes {
    id: string;
    sowId: string;
    customerId: string;
    plannedInvoiceDate: Date;
    totalActualAmount: number;
  }
  
  class SOWPaymentPlan extends Model<sowPaymentPlanAttributes> implements sowPaymentPlanAttributes {
    public id!: string;
    public sowId!: string;
    public customerId!: string;
    public plannedInvoiceDate!: Date;
    public totalActualAmount!: number;
  }
  
  SOWPaymentPlan.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      sowId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: SOW,
          key: 'id',
        },
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: Customer,
          key: 'id',
        },
      },
      plannedInvoiceDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalActualAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "payment_plans",
      timestamps: false,
    }
  );
  
  export { SOWPaymentPlan };
  
  
  
  
  