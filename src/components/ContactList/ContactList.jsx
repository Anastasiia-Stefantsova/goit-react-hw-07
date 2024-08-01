import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { fetchContacts } from '../../redux/contactsOps';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  if (error) {
    return <p>Error loading contacts: {error}</p>;
  }

  return (
    <div>
      <ul className={css.listItem}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}