import express, { Request, Response, NextFunction } from 'express'
import {imageExists} from '../helpers/checkImageExists' 

export const checkImage = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {imageId, width, height } = res.locals.data;
        const imageData = imageExists(imageId,width,height);
        next();
    } catch (err) {
        console.log('12234 ------------------------------');
      
      err.code = 422;
      console.log(err.message, 'lll');
      console.log(err);
      
      
      next(err);
    }
  };