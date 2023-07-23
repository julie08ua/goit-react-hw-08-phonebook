import { nanoid } from '@reduxjs/toolkit';
import {Input, Button,Text, Form, Label} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const { name,number } = e.currentTarget;
        const form = e.target;

        const contact = {
            name: name.value,
            number: number.value,
            id: nanoid(),
        };

        const checkName = contacts.find(
            contact => contact.name.toLowerCase() === name.value.toLowerCase()
        );
        
        if (checkName) {
            alert(`${name.value} is already in contacts.`);
        } else {
            dispatch(addContact(contact));
          }

        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>

            <Label>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </Label>
                
            <Button type="submit">Add contact</Button>
        </Form>
    );
}