import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { getAllUsers, getByNameUsers, getByType } from './data/endPoints';


const app: Express = express();

app.use(express.json());
app.use(cors());


 // endpoints aqui

 app.get("/users", getAllUsers)
 app.get("/users/search", getByNameUsers)
 app.get("/users/search/:type", getByType)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});