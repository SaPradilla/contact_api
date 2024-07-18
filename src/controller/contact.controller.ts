import { MulterRequest } from "interfaces/multer.interface";
import { ContactBody, Image } from "../interfaces/contact.interface";
import { createContact } from "../repositories/contact.repository";
import { createNewContact, findContact, findContacts, switchLikeContact } from "../services/contact/contact.service";
import {  Response,Request } from 'express';

export async function saveContact (req:MulterRequest,res:Response) {

    const contactBody:ContactBody = req.body;
    const image:Image = req.file;
    try{
        const newContact = await createNewContact(image,contactBody)
        return res.status(201).json(newContact)

    }catch(error){
        return res.status(500).json({error:error.message})
    }
}


export async function findAll(req:Request,res:Response){

    try {
        
        const contacts = await findContacts();
        return res.status(200).json(contacts)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}



export async function findOne(req:Request,res:Response){

    const {id} = req.params;

    try {
        const contact = await findContact(parseInt(id));

        return res.status(200).json(contact)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}




export async function changeLikeContact(req:Request,res:Response) {

    const {id} = req.params;

    try {
        
        await switchLikeContact(parseInt(id));

        return res.status(200).json('liked update!');
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}