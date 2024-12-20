import { selectContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice.js';


const ContactList = () => {
    // Получаем контакты из состояния
    const contacts = useSelector(selectContacts);

    // Получаем строку фильтра
    const filter = useSelector(selectNameFilter); // Строка фильтра из слайса filters

    // Фильтруем контакты по имени
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.wrapper}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
};

export default ContactList;