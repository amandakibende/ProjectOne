import React from "react";
import { Link } from "react-router-dom";

function NewNft() {
  return (
    <div>
      <header>
        <Link exact to="/">
          Home
        </Link>
      </header>
      <h1>New NFT</h1>
    </div>
  );
}

export default NewNft;
