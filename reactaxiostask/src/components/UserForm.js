import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, selectedUser }) {
    const [user, setUser] = useState({ name: '' });

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        } else {
            setUser({ name: '' });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            updateUser(user);
        } else {
            addUser(user);
        }
        setUser({ name: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter name"
            />
            <button type="submit">{user.id ? 'Update' : 'Add'}</button>
        </form>
    );
}

export default UserForm;
