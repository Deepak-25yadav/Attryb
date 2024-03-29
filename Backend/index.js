const express = require("express");
const { dataBaseConnection } = require("./Configs/dataBase.js");
require("dotenv").config();

const cors = require("cors");
const { userRouter } = require("./Routes/userRouter.js");
const { oemSpecsRouter } = require("./Routes/oemSpecsRouter.js");
const { invetoryRouter } = require("./Routes/marketPlaceInvetoryRouter.js");

const app = express();

//this cors is used to avoid error on frontend that both the server and frontend are not same error

app.use(cors());

//this express.json is used to get the data from the fronted in json  parsed format

app.use(express.json());

//for user router
app.use("/", userRouter);

//for oemRouter
app.use("/", oemSpecsRouter);

//for inventory router
app.use("/", invetoryRouter);

//this index.js file is used to start the server and and so we that we can connect to database and get data
app.listen(process.env.PORT, async () => {
  try {
    console.log(`Server is Started at  ${process.env.PORT}`);

    await dataBaseConnection;

    console.log("Data Base Is Connected to Server");
  } catch (error) {
    console.log(error);
  }
});



