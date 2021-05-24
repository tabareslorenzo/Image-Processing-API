import {application} from 'express';
import image from './routes/image'

const routes = (app : typeof application) => {
    app.use('/api/image', image);
    
}


export default routes;