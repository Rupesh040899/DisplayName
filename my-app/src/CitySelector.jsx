import React, { useState } from "react";

export default function CitySelector() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(false);

  const handleChange = () => {
    if (firstName && lastName) {
      setFullName(true);
    }
  };

  return (
    <div>
      <div>
        First Name :{" "}
        <input
          type="text"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        Last Name :{" "}
        <input
          type="text"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <input
        type="submit"
        value="Submit"
        onClick={handleChange}
        
      />
      {fullName ? (
        <div>
          Full Name : {firstName} {lastName}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
