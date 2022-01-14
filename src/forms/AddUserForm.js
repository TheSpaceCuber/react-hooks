import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialFormState = {id: null, name: '', username: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        console.log(event)
        setUser({...user, [name]: value})
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (!user.name || !user.username) return // validation to make sure empty values cannot be submitted

            props.addUser(user)
            setUser(initialFormState) // setter to reset the form to its initial value after successful submission
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm