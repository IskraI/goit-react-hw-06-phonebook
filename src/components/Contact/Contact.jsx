import React from 'react';

import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsSlice';

import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const { name, number } = contact;
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{number}</span>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(removeContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
