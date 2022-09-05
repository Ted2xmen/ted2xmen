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
      {/* SOFT SKILLS Analytical Thinking | Problem-Solving Abilities | Self-Motivated | Strong
      Communication | Project Management | Planning | Time Management | Adaptability | Continuous
      Learning | Collaboration & Teamwork | Coaching Mindset | Resilience | Curiosity | Emotional
      Intelligence | Creativity. */}
    </div>
  )
}

export default SoftSkills
