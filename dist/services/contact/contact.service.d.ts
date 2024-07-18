import { ContactBody, IcontactModel, Image } from "../../interfaces/contact.interface";
export declare function createNewContact(image: Image, contactBody: ContactBody): Promise<IcontactModel>;
export declare function findContacts(): Promise<IcontactModel[] | []>;
export declare function findContact(contactId: number): Promise<IcontactModel | null>;
export declare function switchLikeContact(contactId: number): Promise<void>;
