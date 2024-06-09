import dotenv from 'dotenv';
dotenv.config();

const credential = {
    postgres:{
                USERNAME : process.env.USER || '',
                DATABASE : process.env.DATABASE || '',
                HOST : process.env.HOST || '',
                PASSWORD: process.env.PASSWORD || "",
                DB_PORT: Number(process.env.DATABASE_PORT) || 5432,
        }
};

export default credential;