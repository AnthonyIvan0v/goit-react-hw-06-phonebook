// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ContactsForm from 'modules/PhoneBook/ContactsForm/ContactsForm';
import ContactsList from 'modules/PhoneBook/ContactList/ContactList';
import Filter from 'modules/PhoneBook/Filter/Filter';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';

import { setFilter } from 'redux/filter/filter-slice';

import { getAllContacts } from 'redux/contacts/contacts-selector';
import { getFiltredContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

const App = () => {
  const filtredContacts = useSelector(getFiltredContacts);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDuplicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const newAddedNumber = number;
    const contact = allContacts.find(({ name, number }) => {
      return name.toLowerCase() === normalizedName && number === newAddedNumber;
    });
    return Boolean(contact);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDuplicate(name, number)) {
      return alert(`${name} is already in contacts`);
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filtredContacts.length);

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} handleChange={handleFilter} />
      {isContacts && (
        <ContactsList
          items={filtredContacts}
          removeContact={handleDeleteContact}
        />
      )}
      {!isContacts && <p>No contacts in list</p>}
    </div>
  );
};

export default App;
