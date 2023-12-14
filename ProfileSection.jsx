// ProfileSection.jsx
import React from 'react';

const ProfileSection = ({ profile }) => (
  <section className="profile-section">
    <h2>{profile.name}</h2>
    <p>{profile.college}</p>
    <p>{profile.designation}</p>
  </section>
);

export default ProfileSection;
