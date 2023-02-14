import { useState } from 'react';
import './App.css'

const nullsArr = [null, null, null, null, null, null, null, null, null]

const cellIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Characters = {
  Circle: 'circle',
  Cross: 'cross'
}

function App() {

  const [fields, setFields] = useState(nullsArr)
  const [currentCharacter, setCurrentCharacter] = useState(Characters.Circle)

  function handleSetFields(e) {

    if (fields[e.target.id] !== null) return

    const newFields = fields

    newFields[e.target.id] = currentCharacter

    setFields(newFields)

    setCurrentCharacter(prev => prev === Characters.Circle ? Characters.Cross : Characters.Circle)
  }

  return (
    <div id="root">
      <button class="button_cleanup">cleanup</button>
      <div class="grid-container">
        {cellIds.map(cellId => {
          if (fields[cellId] === Characters.Circle)
            return (
              <div class={`item item${cellId + 1}`} id={cellId} onclick={handleSetFields}>
                <svg height="100" width="100">
                  <circle cx="35" cy="35" r="20" stroke="red" stroke-width="3" fill="white" />
                </svg>
              </div>
            )

          if (fields[cellId] === Characters.Cross)
            return (
              <div class={`item item${cellId + 1}`} id={cellId} onclick={handleSetFields}>
                <svg>
                  <line x1="10" y1="10" x2="55" y2="55" stroke="blue" stroke-width="5" />
                  <line x1="55" y1="10" x2="10" y2="55" stroke="blue" stroke-width="5" />
                </svg>
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


export default App;
