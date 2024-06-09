import { Sequelize } from "sequelize";
import credential from "../common/credentials";


const sequelize = new Sequelize({
    username: credential.postgres.USERNAME,
    host: credential.postgres.HOST,
    database: credential.postgres.DATABASE,
    password: credential.postgres.PASSWORD,
    port: credential.postgres.DB_PORT,
    dialect: "postgres"
});

sequelize.authenticate().then(() => {
    console.log("Database connected successfully...");
}).catch((err) => {
    console.error("Unable to connect to the database...", err);
});

sequelize.sync().then(() => {
    console.log("Models synchronized successfully...");
}).catch((err) => {
    console.error("Unable to synchronize models...", err);
});

export default sequelize;