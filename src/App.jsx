import './App.css'
import AddContact from './components/AddContact'
import Header from './components/Header'
import ContactList from './components/ContactList'
function App() {
  const contacts = [
    {
      id: '1',
      'name': 'Munna',
      'email': 'munnakhan@gmail.com',
    },
    {
      id: '2',
      'name': 'Tanvir',
      'email': 'tanvire@gmail.com',
    },
  ]

  return (
    <>
      <Header />
      <AddContact />
      <div className='mx-10'>
        <ContactList contacts={contacts} />
      </div>
    </>
  )
}

export default App
