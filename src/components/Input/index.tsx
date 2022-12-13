// import react attributes
import React, { InputHTMLAttributes } from "react";
// import styled components
import { InputStyledComponent, Label, InputLabel } from './styles';

// interface input
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

// generic input form to use
export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...props }, ref) => {
    return (
      <InputLabel>
        <Label>{label}</Label>
        <InputStyledComponent id={id} {...props} ref={ref} />
      </InputLabel>
    );
  }
);
