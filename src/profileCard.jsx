import React from 'react';
import './ProfileCard.css'; 

const ProfileCard = () => {
  const user = {
    name: 'Muhammad Mudasir',
    email: 'mudasirhanif5438@gmail.com',
    location: 'Karachi, Pakistan',
  };

  return (
    <div className="profile-card">
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default ProfileCard;
