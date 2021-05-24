export const validate = (imageId : string, width: string, height: string) : void => 
{
    if(!imageId)
    {
        throw new Error('Invalid input: No imageId');
    }
    if(!width)
    {
        throw new Error('Invalid input: No width');
    }
    if(!height)
    {
        throw new Error('Invalid input: No height');
    }

}