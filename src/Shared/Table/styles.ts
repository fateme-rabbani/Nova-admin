import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.contentBackground};
  overflow: hidden;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: start;
  table-layout: fixed;

  thead {
    background: ${({ theme }) =>
      theme.mode === "dark"
        ? theme.colors.primary800
        : theme.colors.primary100};

    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.primary25 : theme.colors.primary800};
  }

  th,
  td {
    padding: 12px 16px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    padding: 20px 16px;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }

  td > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  td > img {
    margin-inline: auto;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  tbody tr {
    transition: background-color 0.2s ease;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;
