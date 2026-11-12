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

export const InputWrapper = styled.div`
  position: relative;
`;

export const Field = styled.input<{ $hasPasswordButton: boolean }>`
  display: block;
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  padding-inline-end: ${({ $hasPasswordButton }) =>
    $hasPasswordButton ? "48px" : "12px"};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.info500};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PasswordButton = styled.button`
  position: absolute;
  top: 50%;
  inset-inline-end: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  transform: translateY(-50%);
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.info500};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.negative500};
  font-size: 12px;
`;
