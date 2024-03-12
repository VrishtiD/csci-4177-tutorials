// ProfileListingPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileListingPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    return (
      firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Profile Listing Page</h2>
      <input
        type="text"
        placeholder="Search by First Name or Last Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-item">
            <Link to={`/profile/${user.id}`}>
              <img src={user.image} alt={user.name} />
              <p>{user.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileListingPage;

