import React, { useState } from 'react'

import Search from './Search'
import FriendsList from './FriendsList'
import friends from '../dummy-data/friends'

export default function App() {
  /* 👉 Buraya state tanımlamak gerekli mi? */
  const [friendsData, setFriendsData] = useState(friends)
  //const [filteredData, setFilteredData] = useState(friends)

  const searchHandler = (event) => {
    const searchResult = friends.filter((friend) => {
      return friend.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
        
    });
    setFriendsData(searchResult);
  };

  return (
    <div className="app-friends container">
      {/* 👉 Buraya hangi componentler gelecek? */}
      <Search searchHandler={searchHandler} />
      <FriendsList friendsData={friendsData} setFriendsData={setFriendsData} />
    </div>
  )
}
