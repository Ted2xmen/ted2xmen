import React from 'react'

const softSkilss = [
  'Self-Motivated',
  'Strong Communication',
  'Continuous Learning',
  'Project Management ',
]

const SoftSkills = () => {
  return (
    <div>
      <div>
        {softSkilss.map((item, i) => {
          return (
            <span className="badge-2" key={i}>
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default SoftSkills
