import { useState } from 'react';
import './App.css'
import { cellIds, Characters, nullsArr } from './constants'
import { Circle } from './components/circle'
import { Cross } from './components/cross'
import { CleanButton } from './components/cleanButton'


function App() {  
  const [fields, setFields] = useState([...nullsArr])
  const [currentCharacter, setCurrentCharacter] = useState(Characters.Cross)

  function handleSetFields(e) {

    if (fields[e.target.id] !== null) return

    const newFields = fields

    newFields[e.target.id] = currentCharacter

    setFields(newFields)

    setCurrentCharacter(prev => prev === Characters.Circle ? Characters.Cross : Characters.Circle)
  }

  const cleanFields = () => {
    
    setFields([...nullsArr]);
  }

  return (
    <div id="root">
      <CleanButton cleanFields={cleanFields} />
      <div class="grid-container">
        {cellIds.map(cellId => {
          if (fields[cellId] === Characters.Cross)
            return (
              <div class={`item item${cellId + 1}`} id={cellId} onClick={handleSetFields}>
                <Cross />
              </div>
            )
            
            if (fields[cellId] === Characters.Circle)
            return (
              <div class={`item item${cellId + 1}`} id={cellId} onClick={handleSetFields}>
                <Circle />
              </div>
            )


          return (
            <div class={`item item${cellId + 1}`} id={cellId} onClick={handleSetFields}>
            </div>
          )
        })}
      </div>
    </div>
  );
}



  export default (App);