import styled from "styled-components";

export const Container = styled.dialog`
  width: 560px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  margin: auto;
  padding: 0;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};

  &::backdrop {
    background: #0000007c;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.span`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Content = styled.div`
  padding: 24px;
`;
