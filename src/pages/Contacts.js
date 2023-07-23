import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <h1>Phonebook</h1>
             <ContactForm />
            <h2>Contacts:</h2> 
             <Filter />
            <ContactsList />
        </>
    );
};