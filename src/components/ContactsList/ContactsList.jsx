import { useDispatch, useSelector} from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactsItem, Button} from './ContactList.styled';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const visibleContact =
        contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <ul>
            {visibleContact.map(({ id, name, phone }) => (
                <ContactsItem key={id}>
                    {name}: {phone}

                    <Button
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                    >
                        Delete
                    </Button>
                </ContactsItem>
            ))}
        </ul>
    );
}