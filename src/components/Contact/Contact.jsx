import React from 'react';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; // Імпорт з contactsOps.js

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.itemUser}>
          <p><FaUser /></p>
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.itemUser}>
          <p><BsFillTelephoneFill /></p>
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}