import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionController {
    async index(req: Request, res: Response) {
        const totalConnections = await db('connections').count('* as total');
        const { total } = totalConnections[0];
        return res.json({
            total
        });
    }

    async create(req: Request, res: Response) {
        const { user_id } = req.body;
        try {
            await db('connections').insert({
                user_id
            });
            return res.status(201).send()
        } catch (exception) {
            return res.status(400);
        }
    }
}