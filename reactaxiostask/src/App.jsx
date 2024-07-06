import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
      fetchUsers();
  }, []);

  const fetchUsers = async () => {
      try {
          const response = await api.get('/');
          setUsers(response.data);
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  };

  const addUser = async (user) => {
      try {
          const response = await api.post('/', user);
          setUsers([...users, response.data]);
      } catch (error) {
          console.error("Error adding user:", error);
      }
  };

  const updateUser = async (user) => {
      try {
          const response = await api.put(`/${user.id}`, user);
          setUsers(users.map(u => (u.id === user.id ? response.data : u)));
      } catch (error) {
          console.error("Error updating user:", error);
      }
  };

  const deleteUser = async (userId) => {
      try {
          await api.delete(`/${userId}`);
          setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
          console.error("Error deleting user:", error);
      }
  };

  return (
      <div className="App">
          <UserForm addUser={addUser} updateUser={updateUser} selectedUser={selectedUser} />
          <UserList users={users} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
      </div>
  );
}

export default App;