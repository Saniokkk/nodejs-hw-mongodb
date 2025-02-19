import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getStudentById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
export const createContact = async (newContact) => {
  const contact = await ContactsCollection.create(newContact);
  return contact;
};
