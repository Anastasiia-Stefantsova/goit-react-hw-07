import React from 'react';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  return (
    <div className={css.container}>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}