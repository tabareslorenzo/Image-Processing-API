import fs from 'fs'
import path from 'path'
import sharp from 'sharp';

const dir = "resizedImage"

export const sharphelper = async (imgname : string, width: string, height: string) => {
   
    
    const imgtitle = imgname.substring(0,imgname.length-4);
    
    try {
        let data = null
        data =  fs.readFileSync(path.resolve(__dirname, `../../${dir}/${imgtitle},${width},${height}.jpg`));  
        
    }
    catch{
        //createimage
        console.log(path.resolve(__dirname, `../../images/${imgname}`));
        
        const img = await sharp(path.resolve(__dirname, `../../images/${imgname}`))
        .resize(parseInt(width), parseInt(height))
        .toBuffer()
        console.log(path.resolve(__dirname, `../../${dir}/${imgtitle},${width},${height}.jpg`));
        fs.writeFile(
            path.resolve(__dirname, `../../${dir}/${imgtitle},${width},${height}.jpg`)
            , 
            img, 
            (err) => {
                if (err) {
                    console.log('err', err);
                } else {
                    console.log("JSON saved");
                }
            }
            )


    }

    
}