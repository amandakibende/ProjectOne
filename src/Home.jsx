import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <ul>
        <li>
          <Link exact to="/all-nft">
            <h2>All NFT</h2>
          </Link>
        </li>
        <li>
          <Link exact to="/new-nft">
            <h2>New NFT</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
