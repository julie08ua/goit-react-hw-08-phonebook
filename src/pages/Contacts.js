import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectContacts } from 'redux/selectors';

export default function Contacts() {
    const dispatch = useDispatch();

     const allContacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            
             <ContactForm />
            
            {allContacts.length > 0 && (
              <>
                <Filter />
                <ContactsList />
              </>
                
            )}
        </>
    );
};