import { ContactBody, Image } from "../interfaces/contact.interface";


export const validateBody = (contactBody:ContactBody,imageBody:Image)=>{

    const errors = [];

    if(!imageBody){
        errors.push('Avatar is required');``
    }

    if(!contactBody.first_name){
        errors.push('First name is required');
    }

    if(!contactBody.last_name){
        errors.push('Last name is required');
    }

    if(!contactBody.liked){
        errors.push('Liked is required');
    }

    
    return errors;

}