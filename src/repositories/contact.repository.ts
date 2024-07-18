import {  ContactModel } from "../models/contact.model";
import { ContactInterface, IcontactModel } from "../interfaces/contact.interface";

export async function createContact(contactBody:ContactInterface):Promise<IcontactModel | null> {
    
    const newContact = new ContactModel({
        
        email:contactBody.email,
        first_name:contactBody.first_name,
        last_name:contactBody.last_name,
        avatar:contactBody.avatar,
        liked:contactBody.liked
    })

    try {
        
        const saveContact = await newContact.save();

        return saveContact;

    } catch (error) {
        throw error;
    }

}


export async function findEmailContact(contactEmail:string):Promise<IcontactModel | null >{
    try{
        const findContact = await ContactModel.findOne({email:contactEmail});
        return findContact;
    }catch(err){
        throw err;
    }

}

export async function findAllContacts():Promise<IcontactModel[] | []> {

    try {
        
        const contacts = await ContactModel.find();
        return contacts;

    } catch (err) {
        throw err;
    }

}


export async function findOneContact(contactId:number):Promise<IcontactModel | null> {

    try {
        
        const contact = await ContactModel.findOne({id:contactId});
        return contact

    } catch (err) {
        throw err;
    }

}

export async function updateLikedContact(contactId:number,like:boolean) {
    
    try {
        
        await ContactModel.updateOne(
            {id:contactId},
            {$set:{ liked:!like} }
        )

    } catch (err) {
        throw err;
    }

}