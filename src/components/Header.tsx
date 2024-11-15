import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <h1
        style={{
          backgroundColor: "lightblue",
          padding: "1rem",
          margin: "0"
         
        }}
      >
        Header
      </h1>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "lightblue",
          padding: "1rem",
          listStyle: "none",
          margin: "0",
          fontSize: "20px",
        }}
      >
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/profile"}>Porfile</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
