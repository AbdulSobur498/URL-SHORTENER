import express, { Request, Response, NextFunction  } from "express";
import { Router } from "express";
import { generateShortCode } from "../utils//generateShortCode";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import pool from "../config/database";

 const apiRoutes = Router();

export const postUrl = apiRoutes.post("/short", validateMiddleware, async(req:Request, res:Response) => {
    try {
         const { url } = req.body;

         const urlCode = generateShortCode();

         const urls = await pool.query(`INSERT INTO urls(original_url, url_code) VALUES($1, $2) RETURNING *`,
            [url, urlCode]
        );
       
        res.status(200).json({
            message: "URL shortened successfully",
            data: urls.rows[0],
        });

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

export const getUrl = apiRoutes.get("/:urlCode", async(req:Request, res:Response) => {

    try {
        const { urlCode } = req.params;

        const data = await pool.query(`SELECT original_url FROM urls WHERE url_code = $1`,
        [urlCode]
        );

        if (data.rows.length === 0) {
        return res.status(404).send("URL not found");
        } 

        return res.redirect(data.rows[0].original_url);

    } catch (err) {
        console.log(err);

        res.status(500).send("Internal Server Error");
    }
    
});





/*
 2 routes 
 get 
 post
 */