import React, { useState } from 'react'
import Content from './Content';

const App: React.FC = () => {
  const [view, setView] = useState("Whole")

  const changeView = (e: any) => {
    setView(e.target.value)
    console.log(view)
  }
  
  return (
    <main>
      <h1>🧬 G25 coordinates catalogue</h1>
      <div className="choice">
        <p>View:</p>
          <fieldset>
          <div>
            <input name='view' onClick={changeView} value='Accordion' defaultChecked={view === "Accordion"} id='accordion' type="radio" />
            <label htmlFor="accordion">Accordion</label>
          </div>
          <div>
            <input name='view' onClick={changeView} value='Whole' defaultChecked={view === "Whole"} id='whole' type="radio" />
            <label htmlFor="whole">Whole</label>
          </div>
        </fieldset>
      </div>
      {view === "Whole" ? <Content type='Whole' /> : <Content type='Accordion' /> }
    </main>
  )
}

export default App
