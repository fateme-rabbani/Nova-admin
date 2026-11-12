import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  direction: var(--content-direction);
`;

export const Toolbar = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
`;

export const SearchWrapper = styled.div`
  width: 420px;
  direction: var(--content-direction);
`;

export const Status = styled.span`
  display: inline-block;
  padding: 8px 14px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.positive50};
  color: ${({ theme }) => theme.colors.positive700};
  font-size: 12px;
  white-space: nowrap;
  font-weight: 700;

  &.hidden {
    background: ${({ theme }) => theme.colors.negative50};
    color: ${({ theme }) => theme.colors.negative700};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &.delete {
    color: ${({ theme }) => theme.colors.negative500};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
