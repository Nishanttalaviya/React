//1. create a controller  input which allows only alphanumeric characters
//if user input any special then remove the secial characters(usestate)

import React, { useState } from "react";

const AlphanumericInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="p-4">
      <label htmlFor="alphanumeric-input" className="block mb-2 text-sm font-medium text-gray-700">
        Enter alphanumeric text:
      </label>
      <input
        id="alphanumeric-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))}
        placeholder="Enter alphanumeric text"
        className="border p-2 rounded w-full"
        aria-label="Alphanumeric input"
      />
    </div>
  );
};

export default AlphanumericInput;
