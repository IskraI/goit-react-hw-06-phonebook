import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterSlice';
import css from './Filter.module.css';
// import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <form className={css.form}>
      <label className={css.label}>
        <span className={css.input__name}>Find contacts by name</span>
        <input
          className={css.input__data}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          // required
          // value={value}
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </form>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
