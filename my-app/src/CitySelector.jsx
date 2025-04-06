import React, { useState } from "react";

export default function CitySelector() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(true);
    } else {
      setFullName(false); // Reset if either field is empty
    }
  };

  return (
    <div>
      <form action="">
        <h1>Full Name Display</h1>
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
        <button type="submit" onClick={handleChange}>
          Submit
        </button>
      </form>
      {fullName && (
        <div>
          Full Name: {firstName} {lastName}
        </div>
      )}
    </div>
  );
}
