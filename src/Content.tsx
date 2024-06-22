import React, { useState } from 'react'
import customData from './data.json';
import Arrow from './Arrow';
import { escapedNewLineToLineBreakTag } from './helpers';

type ContentProps = {
  type: "Whole" | "Accordion"
}

const Content: React.FC<ContentProps> = ({ type }) => {
  const initialData = customData
  const [data, setData] = useState(initialData);

  const toggle = (id: number) => {
    setData(data.map((cord) => ({
      ...cord,
      isHidden: (cord.id === id) ? !cord.isHidden : cord.isHidden,
    })))
  }


  if (type === "Whole") {
    return(
      <div>
        <h1>Whole</h1>
        {data.map((cord) => 
            <div className='element-hidden' key={cord.id}>
                <span className='element-bold'>{cord.title}</span><br />
                {escapedNewLineToLineBreakTag(cord.text)}
            </div>
        )}
      </div>
    );
  } else if (type === "Accordion") {
    return(
      <div className='accordion'>
        {data.map((cord) => 
            <div className='accordion-element' key={cord.id}>
              <div className='element-visible' onClick={() => toggle(cord.id)}>
                <p className='element-text'>{cord.title}</p>
                <Arrow className={`element-icon ${cord.isHidden ? "" : "icon-rotated"}`} />
              </div>
              <div className={`element-hidden ${cord.isHidden ? "hide" : ""}`}>
                {escapedNewLineToLineBreakTag(cord.text)}
              </div>
            </div>
        )}
      </div>
    );
  }
}

export default Content;