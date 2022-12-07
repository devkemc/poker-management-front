// import react attributes
import { ButtonHTMLAttributes } from "react";
// import styled components
import { ButtonStyle } from "./styles";

// interface title
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

// generic button form to use
export const Button = ({ name, ...props }: Props) => {
  return <ButtonStyle {...props}>{name}</ButtonStyle>;
};
