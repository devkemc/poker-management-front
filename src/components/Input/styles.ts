import styled from "styled-components";

export const InputLabel = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const InputStyledComponent = styled.input`
  width: 100%;
  height: 1.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.black};
  text-align: center;
  border: 1px solid ${(props) => props.theme["blue-400"]};
  background: white;
  :focus {
    outline-color: ${(props) => props.theme["blue-400"]};
  }
  ::placeholder {
    color: ${(props) => props.theme["blue-400"]};
  }
`;
export const Label = styled.label`
  font-family: "Roboto", sans-serif;

  color:black;
  font-weight: bold;
  font-size: 1rem;
`;
