import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  min-height: 44px;
  padding-block: 10px;
  padding-inline-start: 12px;
  padding-inline-end: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: ${({ theme }) => theme.colors.contentBackground};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Arrow = styled.span`
  position: absolute;
  inset-inline-end: 12px;
  top: 50%;
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  transform: translateY(-50%);
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.negative500};
  font-size: 12px;
`;
