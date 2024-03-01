import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

export default function Add() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const navigateTo = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onSave = () => {
    if (!name || !surname || !phone) return;
    const id = uuid();
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    list.push({ id, name, surname, phone });
    sessionStorage.setItem("list", JSON.stringify(list));
    navigateTo("/");
  };

  return (
    <div>
      <div className="form">
        <div className="form-content">
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            name="name"
            placeholder="First Name"
          />
          <input
            value={surname}
            onChange={handleSurnameChange}
            type="text"
            name="surname"
            placeholder="Last Name"
          />
          <input
            value={phone}
            onChange={handlePhoneChange}
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
          />
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
