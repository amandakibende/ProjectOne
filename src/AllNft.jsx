import React from "react";
import { Link } from "react-router-dom";

function AllNft() {
  return (
    <div>
      <header>
        <Link exact to="/">
          Home
        </Link>
      </header>
      <h1>All NFT</h1>
    </div>
  );
}

export default AllNft;
