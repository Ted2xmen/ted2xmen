import React from 'react'

const techList = [
  'React',
  'Next JS',
  'Vue JS',
  'State Management: Redux Toolkit and Pinia',
  'Styling: Tailwind, Styled Components, MaterialUI, Bootstrap',
]

const TechList = () => {
  return (
    <div className="max-w-6xl">
      <div className="flex flex-wrap space-x-3 space-y-3">
        {techList.map((item, i) => {
          return (
            <span className="badge" key={i}>
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default TechList
