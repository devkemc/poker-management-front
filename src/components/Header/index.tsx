import { Div, HeaderContainer, Nav } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Div>
      <h1>Poker Management</h1>
      <p>Engenharia III</p>
      </Div>
      <nav>
        <Nav href="/cadastro">Cadastrar</Nav>
        <Nav href="/">Listar</Nav>
      </nav>
    </HeaderContainer>
  );
};
