'use client'
import React, { CSSProperties, useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';``
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Cookies from 'js-cookie';

const defaultAvatarURL = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';

const userButtonStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '200px',
};

const avatarStyle: CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px',
  objectFit: 'cover',
};

const userNameStyle: CSSProperties = {
  fontSize: '14px',
  fontWeight: 'bold',
};

export default function UserButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
  const userJSON = Cookies.get('user');
  const user = userJSON ? JSON.parse(userJSON) : null;
  const [isClient, setIsClient] = useState(false)
  const handleLogout = () => {
    Cookies.remove('isLoggedIn');
    Cookies.remove('user');
    setIsLoggedIn(false);
    window.location.reload();
  };

  useEffect(() => {
    setIsClient(true);
    if (isLoggedIn) {
      const accessToken = Cookies.get('accessToken');
      fetchUserProfile(accessToken);
    }
  }, [isLoggedIn]);

  const [userData, setUserData] = useState<{ email: string | undefined; username: string | undefined } | null>(
    null
  );

  const fetchUserProfile = (accessToken: any) => {
    fetch('http://localhost:8000/auth/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((profileResponse) => {
        if (profileResponse.status === 200) {
          return profileResponse.json();
        } else {
          console.error('Error retrieving user profile');
          throw new Error('Error retrieving user profile');
        }
      })
      .then((profileData) => {
        setUserData(profileData);
      })
      .catch((error) => {
        console.error('Error retrieving user profile:', error);
      });
  };

  return (
    <> 
      {isClient ? (
        isLoggedIn ? (
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" style={userButtonStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {user?.picture ? (
                <Image
                  src={user.picture}
                  alt="user avatar"
                  roundedCircle
                  style={avatarStyle}
                />
              ) : (
                <Image
                  src={defaultAvatarURL}
                  alt="user avatar"
                  roundedCircle
                  style={avatarStyle}
                />
              )}
              <span style={userNameStyle}>{userData?.username || ''}</span>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {user?.picture ? (
                <Image
                  src={user.picture}
                  alt="user avatar"
                  roundedCircle
                  style={avatarStyle}
                />
              ) : (
                <Image
                  src={defaultAvatarURL}
                  alt="user avatar"
                  roundedCircle
                  style={avatarStyle}
                />
              )}
      
                <div className="font-medium text-gray-200" style={userNameStyle}>
                  {userData?.username || ''}
                </div>
            </div>
            <Dropdown.Item>
            <Link href="/users/dashboard" style={{ textDecoration: 'none' }}>
              <Button variant="light" size="sm">
                <FontAwesomeIcon icon={faCog} />
                <span>Manage Account</span>
              </Button>
            </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button variant="light" size="sm">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Exams</span>
              </Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button onClick={handleLogout} variant="light" size="sm">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Sign Out</span>
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button variant="light" href="/users/login">
          Sign In
        </Button>
        )
      ) : (
        <Button variant="light" href="/users/login">
          Sign In
        </Button>
      )}
    </>
  );
}
