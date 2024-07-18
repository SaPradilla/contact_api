import { validateBody } from "../../helpers/validate-body";
import { ContactBody, ContactInterface, IcontactModel, Image } from "../../interfaces/contact.interface";
import { createContact, findAllContacts, findEmailContact, findOneContact, updateLikedContact } from "../../repositories/contact.repository";
import { uploadImages } from "../images/uploadImage.service";


export async function createNewContact(image:Image,contactBody:ContactBody):Promise<IcontactModel>{
    try {    
        // Validaciones datos del body
        const errors = validateBody(contactBody,image);
        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
       
        const findEmail = await findEmailContact(contactBody.email);
        if(findEmail) throw new Error('Email already used')     
       
        const imageCreatedUrl:string = await uploadImages(image);

        const newContactData:ContactInterface = {
            ...contactBody,
            avatar:imageCreatedUrl
        }
            
        const newContact = await createContact(newContactData);
        return newContact

    } catch (error) {
        throw error;
    }

}

export async function findContacts():Promise<IcontactModel[] | []>{
    try {

        const contacts = await findAllContacts();
        return contacts;

    } catch (error) {
        throw error;
    }
}

export async function findContact(contactId:number):Promise<IcontactModel | null>{
    try {
        
        const contact = await findOneContact(contactId);

        if(!contact) throw new Error('Contact not found.');

        return contact;

    } catch (error) {
        throw error;
    }
}


export async function switchLikeContact(contactId:number) {
    try {
        // buscar el user y validar que este
        const findContactLike = await findContact(contactId)

        // actualiza el like
        await updateLikedContact(contactId,findContactLike.liked)

    } catch (error) {
        throw error;
    }
}