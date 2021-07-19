import React from "react";

const Greeting = ({ title, titleChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name.."
        onChange={titleChange}
      />
      <p>Hello there {title}</p>
    </>
  );
};

export default Greeting;
