import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('Admin');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('loggedInUser'));
    if (data && data.role === 'employee') {
      setUsername(data.data.firstname);
    }
  }, []); // Runs only once when the component mounts

  const logOutuser = () => {
    localStorage.setItem('loggedInUser', ' ');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutuser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
