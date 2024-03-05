import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default function Add() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const navigateTo = useNavigate();
  // const navigateToList = useNavigate();

  const handleClickToMain = () => {
    navigateTo("/");
  };
  const handleClickToList = () => {
    navigateTo("/list");
  };

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
    const id = uuidv4();
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    list.push({ id, name, surname, phone });
    sessionStorage.setItem("list", JSON.stringify(list));
    setName("");
    setSurname("");
    setPhone("");
  };

  return (
    <StyledContainer>
      <Input
        value={name}
        onChange={handleNameChange}
        type="text"
        name="name"
        placeholder="First Name"
      />
      <Input
        value={surname}
        onChange={handleSurnameChange}
        type="text"
        name="surname"
        placeholder="Last Name"
      />
      <Input
        value={phone}
        onChange={handlePhoneChange}
        type="text"
        name="phonenumber"
        placeholder="Phone Number"
      />
      <Button onClick={onSave}>Save</Button>
      <Wrapper>
        <Button onClick={handleClickToMain}>Main</Button>
        <Button onClick={handleClickToList}>List</Button>
      </Wrapper>
    </StyledContainer>
  );
}

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const Input = styled("input")`
  box-sizing: border-box;
  padding: 18px;
  width: 60%;
`;

const Button = styled("button")`
  padding: 14px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #a3e635;
`;
