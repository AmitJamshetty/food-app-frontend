import React, { useState } from 'react'

const User = (props) => {
    const {name} = props

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(1)

  return (
    <div className='user-card m-4 p-4 bg-gray-50 rounded-lg'>
        {/* <h2>Name : {props.name}</h2> */}
        <h1>Count: {count}</h1>
        <button onClick={() => {
            setCount(count+1)
        }}>Increase Count</button>
        <h1>Count: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Blr</h3>
        <h3>Contact: +91 7349437782</h3>
    </div>
  )
}

export default User