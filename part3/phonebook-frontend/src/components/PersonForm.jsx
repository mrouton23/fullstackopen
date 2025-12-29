import InputForm from './InputForm'

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

export default PersonForm