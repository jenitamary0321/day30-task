import React from 'react';

function User({ user, deleteUser, setSelectedUser }) {
    return (
        <div>
            <p>{user.name}</p>
            <button onClick={() => setSelectedUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
    );
}

export default User;
