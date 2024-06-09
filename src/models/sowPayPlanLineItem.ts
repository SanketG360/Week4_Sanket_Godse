import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { SOWPaymentPlan } from './sowPayPlan';
import { SOW } from './sowManagementModel';

interface SowPaymentPlanItemAttributes {
  id: string;
  sowPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class SowPaymentPlanItem extends Model<SowPaymentPlanItemAttributes> implements SowPaymentPlanItemAttributes {
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

SowPaymentPlanItem.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
    },
    sowId: {
      type: DataTypes.STRING,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    orderId: {
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
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "sow_payment_plan_items",
    timestamps: false,
  }
);

export { SowPaymentPlanItem };
