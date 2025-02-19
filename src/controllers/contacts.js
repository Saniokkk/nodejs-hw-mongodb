import createHttpError from 'http-errors';
import {
  getAllContacts,
  getStudentById,
  createContact,
} from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  if (!contacts.length) {
    throw createHttpError(404, 'Contacts not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getStudentById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createStudentController = async (req, res, next) => {
  const newContact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a student!`,
    data: newContact,
  });
};
