import React from 'react';
import User from './User';

function UserList({ users, deleteUser, setSelectedUser }) {
    return (
        <div>
            <h2>User List</h2>
            {users.map(user => (
                <User key={user.id} user={user} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
            ))}
        </div>
    );
}

export default UserList;
