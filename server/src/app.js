import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import { connectDB } from './DB/index.js';
import { AuthRouters } from './Router/AuthRouters.js';
let app = express();

var corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(cors({ origin: '*' }));
app.use(cors({ "headers": [
  { "key": "Access-Control-Allow-Credentials", "value": "true" },
  { "key": "Access-Control-Allow-Origin", "value": "*" },
  { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
] }));
app.use(bodyParser.json());
app.use(AuthRouters);
const httpServer = createServer(app);
const PORT = 3050;

//connecting to database
connectDB();

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
