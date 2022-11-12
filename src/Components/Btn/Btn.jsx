import React from 'react'

const Btn = ({desc, icons, className}) => {
  return (
    <div>
<button className={className}>{desc} {icons}</button>

    </div>
  )
}

export default Btn