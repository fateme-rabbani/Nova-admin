import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 220px;
  align-items: start;
  gap: 20px;
  direction: var(--content-direction);
`;

export const Fields = styled.fieldset`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 16px;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const Preview = styled.img`
  width: 140px;
  max-width: 100%;
  height: 150px;
  object-fit: contain;
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 190px;
  padding: 16px;
  border: 1px dashed ${({ theme }) => theme.colors.primary300};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;
export const ErrorText = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: ${({ theme }) => theme.colors.negative500};
  font-size: 12px;
`;

export const Footer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: flex-end;
  direction: var(--content-direction);
`;
