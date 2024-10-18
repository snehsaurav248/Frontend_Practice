import React, { useState } from "react";
import "./SimpleForm.css";

function Formmaking() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log("Email", email);
    console.log("Name", name);
    console.log("Input", phone);
  };
  return (
    <div className="form-content">
      <p>Form Making</p>

      <form onSubmit={handleSubmit} className="formMaker">
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <label>Mobile Number :</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Mobile Number"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Formmaking;
