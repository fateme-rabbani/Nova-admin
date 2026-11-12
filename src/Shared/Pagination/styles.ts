import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
  direction: var(--content-direction);
`;

export const PageButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  font: 14px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.colors.info500};
    color: ${({ theme }) => theme.colors.primary800};
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
