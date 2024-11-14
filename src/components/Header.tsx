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
          <Link href={"/about"}></Link>About
        </li>
        <li>
          <Link href={"/profile"}></Link>Porfile
        </li>
        <li>
          <Link href={"/blog"}></Link>Blogs
        </li>
        <li>
          <Link href={"/login"}></Link>Login
        </li>
      </ul>
    </>
  );
};

export default Header;
