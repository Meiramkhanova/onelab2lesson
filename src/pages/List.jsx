import { useEffect, useState } from "react";
import Person from "../components/Person";
import styled from "styled-components";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    setData(list);
  }, []);

  const onDelete = (id) => {
    setData((prevList) => {
      const updatedList = prevList.filter((u) => u.id !== id);
      sessionStorage.setItem("list", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <>
      <Header style={{ textAlign: "center" }}>List</Header>
      <div>
        {data.map((p) => (
          <Person key={p.id} person={p} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}

const Header = styled.h1`
  //another way of writing
  text-align: center;
`;

// const Header = styled("h1")`
//   text-align: center;
//   background-color: pink;
// `;
