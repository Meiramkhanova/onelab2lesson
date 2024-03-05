import styled from "styled-components";
import EditForm from "./EditForm";

export default function Person({
  person,
  onDelete,
  onEdit,
  cancelEdit,
  isEditing,
  onClickEdit,
}) {
  const handleDelete = () => {
    onDelete(person.id);
  };

  const handleEdit = () => {
    onEdit(person.id);
  };

  const handleCancelEdit = () => {
    cancelEdit(person.id);
  };

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.surname}</td>
      <td>{person.phone}</td>
      <td style={{ width: "12%" }}>
        {isEditing ? (
          <EditForm
            person={person}
            onClickEdit={onClickEdit}
            handleCancelEdit={handleCancelEdit}
          />
        ) : (
          <Wrapper>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleEdit}>Edit</Button>
          </Wrapper>
        )}
      </td>
    </tr>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled("button")`
  background-color: #ea580c;
  padding: 8px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;
