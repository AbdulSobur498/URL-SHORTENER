import express, { Request, Response } from "express";
import urlRouters from "./src/routes/index.js";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(urlRouters);


 
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`); 
});