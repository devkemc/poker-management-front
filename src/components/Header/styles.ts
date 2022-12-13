import styled from "styled-components";

export const HeaderContainer = styled.header`
 
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

`;
export const Nav = styled.a`
text-decoration:none;
margin: 0 2rem;
color: white;
&:hover{
  text-decoration: underline;
}`

export const Div = styled.div`
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
`
