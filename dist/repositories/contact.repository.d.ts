import { ContactInterface, IcontactModel } from "../interfaces/contact.interface";
export declare function createContact(contactBody: ContactInterface): Promise<IcontactModel | null>;
export declare function findEmailContact(contactEmail: string): Promise<IcontactModel | null>;
export declare function findAllContacts(): Promise<IcontactModel[] | []>;
export declare function findOneContact(contactId: number): Promise<IcontactModel | null>;
export declare function updateLikedContact(contactId: number, like: boolean): Promise<void>;
