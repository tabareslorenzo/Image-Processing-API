  
import express, { Request, Response } from 'express'
import {validateInput} from '../middleware/validateInput'
import {errorHandler} from '../middleware/validateInputErrorHandler'
import {checkImage} from '../middleware/checkImage'
import {sharphelper} from '../helpers/sharphelper'
// import url from 'url'
const Router = express.Router()


Router.get('/', validateInput, errorHandler, checkImage, errorHandler,  async (req: Request, res: Response) => {
    // const queryObject = url.parse(req.url,true).query;
    // console.log(queryObject);
    const {imageId, width, height } = res.locals.data;
    // console.log(imageId.substring(0,imageId.length-4));

    //pass to another middleware
    const imageData = sharphelper(imageId,width,height);
    // console.log(imageData);
    //than use error handler again
    
    res.json(`img: ${imageId}, wid: ${width}, hei: ${height}`)

    // console.log(res.locals);
    // console.log(req);
    
    
  })

  export default Router