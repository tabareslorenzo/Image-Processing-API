import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: NodeJS.ErrnoException, req : Request, res: Response, next: NextFunction) => {

    console.log(err);
    
    res.status(err.code as unknown as number)
    res.json(err.message)
  }