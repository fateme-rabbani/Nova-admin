import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Field = styled.input`
  display: block;
  width: 100%;
  min-height: 44px;
  padding-block: 10px;
  padding-inline-start: 40px;
  padding-inline-end: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  font: 16px;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.secondary500};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  inset-inline-start: 12px;
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  transform: translateY(-50%);
`;
