import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
// import { useState } from "react"
import './App.css'


function App() {

  // const searchedContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm/>
      <SearchBox />
      <ContactList/>
    </div>
  )
}

export default App
