import React from 'react';
import './NavBar.css'
function NavBar() {
  return (
    <div className="top_nav">
      <div className="list_items">
        <ul>
          <li> Home </li>
          <li> Browse </li>
          <li> Movies </li>
          <li> Tv Shows </li>
          <li> Watchlist </li>
        </ul>
      </div>
      <div className="top_nav-search">
        {/* put a search icon here */}
        <input type="text" />
      </div>
      <div className="Top_nav-profile">
        {/* idk profile here  */}
        <button> profile </button>
      </div>
    </div>
  );
}

export default NavBar;
