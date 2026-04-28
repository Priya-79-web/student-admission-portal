import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    gender: "",
    skills: [],
    address: ""
  });

  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkboxes
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...formData.skills];

    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter(
        (skill) => skill !== value
      );
    }

    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/success");
  };

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Student Name */}
        <label>Student Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Age */}
        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        {/* Course Dropdown */}
        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="B.Sc">B.Sc</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>

        {/* Gender Radio Buttons */}
        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        {/* Skills Checkboxes */}
        <label>Skills:</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="Java"
              onChange={handleCheckbox}
            />
            Java
          </label>

          <label>
            <input
              type="checkbox"
              value="Python"
              onChange={handleCheckbox}
            />
            Python
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              onChange={handleCheckbox}
            />
            React
          </label>

          <label>
            <input
              type="checkbox"
              value="SQL"
              onChange={handleCheckbox}
            />
            SQL
          </label>
        </div>

        {/* Address */}
        <label>Address:</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;