import './App.css'
import AddContact from './components/AddContact'
import Header from './components/Header'
import ContactList from './components/ContactList'
import { useState } from 'react'
function App() {
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) =>{
    setContacts([...contacts,contact])
  }
  return (
    <>
      <Header />
      <AddContact addContactHandler = {addContactHandler} />
      <div className='mx-10'>
        <ContactList contacts = {contacts} />
      </div>
    </>
  )
}

export default App
