import styled from "styled-components";

interface ContainerProps {
  variant: "primary" | "secondary";
}

export const Container = styled.button<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid
    ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.white : theme.colors.primary100};
  border-radius: 8px;
  background: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.info500 : theme.colors.primary50};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.white : theme.colors.primary700};
  font: 16px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
