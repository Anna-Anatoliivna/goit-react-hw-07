import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { selectNameFilter } from '../../redux/filter/filtersSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
        if (contact.name) {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    }
    return false;
  });

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};
