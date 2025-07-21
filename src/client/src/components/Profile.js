// src/components/Profile.js

import React from 'react';

function Profile() {
  return (
    <div className="container my-5 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-circle mb-3"
      />
      <h1>My Dockerized Name</h1>
      <p className="lead text-muted">Full-Stack Developer | Cloud Enthusiast | Lifelong Learner</p>
    </div>
  );
}

export default Profile;
