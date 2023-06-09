import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  // console.log('contacts', contacts);
  // console.log('filter', filter);
  return (
    <ul>
      {visibleContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
export default ContactList;
