import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex from "knex";
import createUser from "./endpoint/createUser";
import { login } from "./endpoint/login";


dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
export const connection = knex({
   client:"mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
  
});

//codigo
app.post('/signup', createUser);
app.post('/login', login);
//app.post('/recipe');
//app.get('/user/profile');
//app.get('/user/:id');
//app.get('/recipe/:id');


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});