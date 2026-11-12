import styled from "styled-components";

export const Card = styled.section`
  width: 560px;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  direction: var(--content-direction);
`;

export const Title = styled.h1`
  margin: 0;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 18px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  direction: var(--content-direction);
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 140px;
    height: auto;
  }
`;

export const Fields = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;

  input {
    text-align: start;
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.negative500};
`;
