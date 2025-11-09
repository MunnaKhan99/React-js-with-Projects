import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} />
        )
    })
    return (
        <div>
            <h1 className='text-4xl  text-center '>Contact List</h1>
            <div className='space-y-4'>{renderContactList}</div>
        </div>
    );
};

export default ContactList;