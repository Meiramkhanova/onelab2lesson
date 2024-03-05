import styled from "styled-components";

// Задание: Добавить стилизацию(желательно сделать список людей в виде таблицы),
// 	добавить функционал удаления человека.Доп.задание - сделать редактирование информации о человеке

export default function Person({ person, onDelete }) {
  const handleDelete = () => {
    onDelete(person.id);
  };

  return (
    <StyledContainer vip={person.name === "name"}>
      <p>{person.name}</p>
      <p>{person.surname}</p>
      <p>{person.phone}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </StyledContainer>
  );
}

const StyledContainer = styled("div")`
  background-color: ${(props) => (props.vip ? "green" : "#a3e635")};
`;

const Button = styled("button")`
  background-color: pink;
  padding: 7px;
  font-size: 15px;
`;
