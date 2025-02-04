import { useEffect } from 'react'

const ContactList = () => {

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
      console.log(response);
    }
    getContacts();
  })
  return <h1>Contact List</h1>;
}

export default ContactList