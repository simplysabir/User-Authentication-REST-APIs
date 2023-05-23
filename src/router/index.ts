import express from "express";
import auhentication from "./auhentication";

const router = express.Router();

export default () : express.Router => {
    auhentication(router);
    return router;
}