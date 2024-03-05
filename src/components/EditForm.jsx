import { useState } from "react";

export default function EditForm(props) {
  const [editedName, setEditedName] = useState(props.person.name);
  const [editedSurname, setEditedSurname] = useState(props.person.surname);
  const [editedPhone, setEditedPhone] = useState(props.person.phone);

  const handleEditClick = () => {
    props.onClickEdit(props.person.id, editedName, editedSurname, editedPhone);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setEditedSurname(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setEditedPhone(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={editedName}
        name="name"
        onChange={handleNameChange}
      />
      <input
        type="text"
        value={editedSurname}
        name="surname"
        onChange={handleSurnameChange}
      />
      <input
        type="text"
        value={editedPhone}
        name="phone"
        onChange={handlePhoneChange}
      />
      <button onClick={handleEditClick}>Save</button>
      <button onClick={props.handleCancelEdit}>Cancel</button>
    </>
  );
}
