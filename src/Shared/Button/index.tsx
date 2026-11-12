import type { ReactNode } from "react";
import { Container, Icon } from "./styles";

interface ButtonProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  leftIcon,
  rightIcon,
  type = "button",
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Container type={type} disabled={disabled} variant={variant} {...props}>
      {leftIcon && <Icon>{leftIcon}</Icon>}
      <span dir="auto">{children}</span>
      {rightIcon && <Icon>{rightIcon}</Icon>}
    </Container>
  );
}

export default Button;
