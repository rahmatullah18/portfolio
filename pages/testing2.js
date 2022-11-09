import React, { useState } from 'react'

export default function Testing2() {
  const [users, setUsers] = useState({
    id: '',
    name: '',
    nohp: ''
  })

  const handleChange = (e) => {
    setUsers((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handleChange} className="border-2" value={users.name} />
        <input type="text" name='nohp' className='border-2' value={users.nohp} onChange={handleChange} />
        <button type='submit'>SUbmit</button>
        {users.name}
        {users.nohp}
      </form>
    </div>
  )
}
