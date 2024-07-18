import { ContactInterface, IcontactModel } from "../interfaces/contact.interface";
export declare function createContact(contactBody: ContactInterface): Promise<IcontactModel | null>;
export declare function findEmailContact(contactEmail: string): Promise<IcontactModel | null>;
