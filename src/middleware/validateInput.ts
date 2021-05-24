import url from 'url'
import { Request, Response, NextFunction } from 'express';
import {validate} from '../helpers/validate' 

export const validateInput = (req: Request, res: Response, next: NextFunction) => {
  try {
    const queryObject = url.parse(req.url,true).query;
    const {imageId, width, height } = queryObject;
    validate(imageId as string, width as string, height as string);
    res.locals.data = queryObject;
    next();
  } catch (err) {

    err.code = 422;
    err.message = err.message
    next(err);
  }
};