import {Model ,DataTypes} from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface organizationAttributes{
    id?:string;
    gstNo:string;
    panNo:string;
    legalOrganizationName:string;
    invoiceTemplateId:string;
    shortName:string;
    contactName:string;
    displayName:string;
    email:string;
    addressId:string;
    phone:string;
}

class Organization extends Model<organizationAttributes> implements organizationAttributes {
  public id!: string;
  public gstNo!: string;
  public panNo!: string;
  public legalOrganizationName!: string;
  public invoiceTemplateId!: string;
  public shortName!: string;
  public contactName!: string;
  public displayName!: string;
  public email!: string;
  public addressId!: string;
  public phone!: string;

}


Organization.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    gstNo: {
      type: DataTypes.STRING,
    },
    panNo: {
      type: DataTypes.STRING,
    },
    legalOrganizationName: {
      type: DataTypes.STRING,
    },
    invoiceTemplateId: {
      type: DataTypes.STRING,
    },
    shortName: {
      type: DataTypes.STRING,
    },
    contactName: {
      type: DataTypes.STRING,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    addressId: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "organizations",
    timestamps: false,
  }
);


export { Organization };
