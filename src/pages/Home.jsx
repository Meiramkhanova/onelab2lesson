import { Link } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledContainer>
      <h1>One Lab 2 lesson</h1>
      <Wrapper>
        <Link to="/add">
          <Button type="add">Add</Button>
        </Link>
        <Link to="/list">
          <Button type="list">See List</Button>
        </Link>
      </Wrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled("div")`
  text-align: center;
  margin-top: 105px;
`;

const Wrapper = styled("div")`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 145px;
`;

const Button = styled("button")`
  ${({ type }) =>
    type === "list"
      ? "background-color: #ea580c;"
      : "background-color: #a3e635;"}
  padding: 25px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
`;
