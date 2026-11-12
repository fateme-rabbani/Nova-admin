import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 24px;
  inset-inline-end: 24px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: calc(100vw - 48px);
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-inline-start: 4px solid ${({ theme }) => theme.colors.positive500};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 16px #00000026;
  direction: var(--content-direction);

  > svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.positive500};
  }
`;

export const Message = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: inherit;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;
