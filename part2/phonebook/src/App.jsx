import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'test', number: '555-555-5555' }, 
    { name: 'foo', number: '555-555-5556' },
    { name: 'bar', number: '555-555-5557' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName )) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
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

  const personsToShow = String(newFilter.length) === 0
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
      <h2>Numbers</h2>
        <ul>
          {personsToShow.map(person => 
            <Contact key={person.name} person={person} />
          )}
        </ul>
    </div>
  )
}

const Filter = ({newFilter, onChange}) => {
  return (
    <div>
      filter shown with
      <input value={newFilter} onChange={onChange} />
    </div>
  )
}

const PersonForm = ({onSubmit, nameValue, nameChange, numberValue, numberChange}) => {
  return (
    <form onSubmit={onSubmit}>
      <div> name: 
        <InputForm value={nameValue} onChange={nameChange}/>
      </div>
      <div> number:
        <InputForm value={numberValue} onChange={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const InputForm = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} />
  )
}

const Contact = ({person}) => {
  return <li>{person.name}, {person.number}</li>
}

export default App