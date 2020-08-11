import React from 'react';
import { Link } from 'react-router-dom';

import './profile-bar.styles.scss';

function ProfileBar() {
  return (
    <Link className="profile">
      <img src="./user-test.png" alt="" className="profile__img" />
      <span className="profile__name">Valdera</span>
    </Link>
  );
}

export default ProfileBar;
