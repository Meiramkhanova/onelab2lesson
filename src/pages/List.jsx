import { useEffect, useState } from "react";
import Person from "../components/Person";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [data, setData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    setData(list);
  }, []);

  const navigateTo = useNavigate();

  const handleClickToMain = () => {
    navigateTo("/");
  };
  const handleClickToList = () => {
    navigateTo("/add");
  };

  const onDelete = (id) => {
    setData((prevList) => {
      const updatedList = prevList.filter((u) => u.id !== id);
      sessionStorage.setItem("list", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  const onClickEdit = (id, editedName, editedSurname, editedPhone) => {
    setData((prevList) => {
      const updatedList = prevList.map((list) =>
        list.id === id
          ? {
              ...list,
              name: editedName,
              surname: editedSurname,
              phone: editedPhone,
            }
          : list
      );

      sessionStorage.setItem("list", JSON.stringify(updatedList));
      return updatedList;
    });

    setEditingItemId(null);
  };

  return (
    <StyledContainer>
      <Header style={{ textAlign: "center" }}>List Of People</Header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <Person
              key={p.id}
              person={p}
              onDelete={onDelete}
              onClickEdit={onClickEdit}
              isEditing={editingItemId === p.id}
              onEdit={handleEdit}
              cancelEdit={handleCancelEdit}
            />
          ))}
        </tbody>
      </table>

      <Wrapper>
        <Button onClick={handleClickToMain}>Main</Button>
        <Button onClick={handleClickToList}>Add</Button>
      </Wrapper>
    </StyledContainer>
  );
}

const Wrapper = styled("div")`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  width: 100%;
`;

const StyledContainer = styled.div`
  margin: 25px;
`;

const Header = styled.h1`
  //another way of writing
  text-align: center;
`;

const Button = styled("button")`
  padding: 14px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #a3e635;
`;

// const Header = styled("h1")`
//   text-align: center;
//   background-color: pink;
// `;
