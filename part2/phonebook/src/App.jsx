import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Contact from './components/Contact'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])
  
  const addName = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName )) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      personsService
        .create(personObject)
        .then(initialPersons => {
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removeName = (id) => {
    const person = persons.find(n => n.id === id)
    personsService
      .remove(id).then(
        setPersons(persons.filter(n => n.id !== id))
      )
      .catch(error => {
        alert(`the person '${id}' was already deleted from the server`)
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = String(newFilter.length) <= 0
    ? persons
    : persons.filter(person => person.name === newFilter)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} onChange={handleFilterChange}/>
      <PersonForm 
        onSubmit={addName} 
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
      />
      <button onClick={() => removeName(1)}>delete id 1</button>
      <h2>Numbers</h2>
        <ul>
          {personsToShow.map(person => 
            <Contact key={person.name} person={person} />
          )}
        </ul>
    </div>
  )
}

export default App