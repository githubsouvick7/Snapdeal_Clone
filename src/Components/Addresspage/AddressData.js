import React from 'react'

const AddressData = ({ task, selected, onSelect, onDelete }) => {
    return (
        <div>
            <input type="radio" checked={selected} onChange={onSelect} />
            <p>{task.name}</p>
            <p>{task.phone}</p>
            <p>{task.streetAddress}, {task.city}</p>
            <p>{task.state}</p>
            <p>{task.zipcode}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default AddressData