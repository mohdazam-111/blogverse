import React from 'react'

function List() {
    const user = [{ id: 1, name: "John Doe", age: 25 }, { id: 2, name: "Jane Smith", age: 30 }, { id:3, name: "Shaikh", age: 25 }];
  return (
    <div>
        <h1>List of Users</h1>
        <ul>
            {user.map((user) => (  
                <li key={user.id}>
                    {user.name} - {user.age} years old
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List