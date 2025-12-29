const Contact = ({ person, removeName }) => {
  return (
    <li>
      {person.name}, {person.number} 
       <button onClick={removeName}>delete</button>
    </li>
  )
}

export default Contact