import { render } from '@testing-library/react';
import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    
    }
    const contacts = [{
        id: '1',
        "name": "Arjun",
        "email": "abc@xyz.com"
    }]
    const renderContactList = contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        )
    });
    return(
        <div style={{marginTop:'15%'}}>
            <h2>Contact List
                <button className="ui button blue right">Add Contact</button>
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;