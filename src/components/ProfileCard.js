import React, { useState } from "react";

function ProfileCard({ avatar, name, bio, id }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p>{bio}</p>
    </div>
  );
}
