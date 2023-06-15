import express, { Request, Response } from "express"
import morgan  from "morgan"
import cors from "cors"
import mongooseConnection from "../databaseConfig/mongoConfig"
import dotenv from "dotenv"
import UserRoutes from "../src/routes/user/userRoutes"
import errorMiddleware from "../middleware/error.middleware"

dotenv.config()

// INTIALIZE APP
const app = express()

console.log(process.env.DATABASE_URL)
mongooseConnection(process.env.DATABASE_URL, process.env.DATABASE_NAME)


app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use(morgan("dev"))

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));

app.get("/addServiceNameBaseURL", (req: Request, res : Response) : void => {
    res.json({message : `Welcome to Sportsbuzz11 with ${process.env.NODE_ENV} enviroment`})
})


app.use("/", new UserRoutes().router)

app.use(errorMiddleware);

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    console.log(err)
    res.statusCode = 500;
    res.end(`error: "Something went wrong: " +`);
  });

  
export default app