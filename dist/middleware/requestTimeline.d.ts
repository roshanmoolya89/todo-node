import { NextFunction, Request, Response } from "express";
declare global {
    namespace Express {
        interface Locals {
            requestStartedAt?: number;
        }
    }
}
declare const requestTimeline: (req: Request, res: Response, next: NextFunction) => void;
export default requestTimeline;
