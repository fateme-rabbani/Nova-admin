import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: var(--content-direction);
`;

export const Fields = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  direction: var(--content-direction);

  label,
  input {
    text-align: start;
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.negative500};
  font-size: 12px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
