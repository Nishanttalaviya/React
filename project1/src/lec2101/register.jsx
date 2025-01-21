//create & registration form with follwing details
//1)cricketer name (text box) minimum & characters
//2) gender (radio button)
//3) email (text box), email validation
//4) matches (checkbox) ODI,TEST, T20,Domestic
//5) password and confirm password batch password should be same
//6) contury (dropdowm)
//7) save button
// when user click on save button all above details should be displayed below form in lable format

import { useState } from "react";

function Cricketer() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    matches: [],
    password: "",
    confirmPassword: "",
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const matchTypes = ["ODI", "TEST", "T20", "Domestic"];
  const countries = ["India", "Australia", "England", "South Africa", "Pakistan"];

  const validateForm = () => {
    let newErrors = {};

    if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender.";
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        matches: checked
          ? [...prev.matches, value]
          : prev.matches.filter((m) => m !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <h2>Cricketer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <label>
          Cricketer Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <p>Gender:</p>
        <label>
          <input type="radio" name="gender" value="Male" onChange={handleChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" onChange={handleChange} />
          Female
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        <br/>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <p>Matches Played:</p>
        {matchTypes.map((match) => (
          <label key={match}>
            <input type="checkbox" value={match} onChange={handleChange} />
            {match}
          </label>
        ))}
        <br/>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            <br/>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </label>
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
        <br/>

        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        <br/>

        <button type="submit">Save</button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h3>Submitted Data:</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Gender:</b> {submittedData.gender}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Matches Played:</b> {submittedData.matches.join(", ") || "None"}</p>
          <p><b>Country:</b> {submittedData.country}</p>
        </div>
      )}
    </div>
  );
}

export default Cricketer;


