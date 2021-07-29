// importing ENV variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Database connection
import ConnectDB from "./database/connection";

// microservice routes
import Auth from "./API/Auth";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

// Application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(5000, () => ConnectDB().then(() => console.log("Server is running!!!"))
    .catch(() => console.log("Server is running, but database connection failed...")
    )
);