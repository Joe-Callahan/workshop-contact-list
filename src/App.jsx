import { useState } from 'react'
import ContactList from './ContactList.jsx'
import ContactDetails from './ContactDetails.jsx'

const App = () => {
  const [selectedContact, setSelectedContact] = useState({});

  return (
    <>
      <h1>My Favorite Contacts</h1>
      {
        selectedContact.id ?
        <ContactDetails 
          selectedContact={selectedContact} 
          setSelectedContact={setSelectedContact}
        /> :
        <ContactList  setSelectedContact={setSelectedContact}/>
      }
    </>
  )
}

export default App