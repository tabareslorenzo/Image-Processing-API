
import fs from 'fs'
import path from 'path'
import sharp from 'sharp';

const dir = "resizedImage"

export const imageExists = (imgname : string, width: string, height: string) => {
   
    
    try {
        fs.readFileSync(path.resolve(__dirname, `../../images/${imgname}`));
        console.log(path.resolve(__dirname, `../../images/${imgname}`));
    
        if (!fs.existsSync(dir)){
            console.log("wwwwwww");
            
            fs.mkdirSync(dir);
        }
    
    }
    catch{
        throw new Error("Invalid Input: Image file doesnt exist ")
       
        
    }

    
}