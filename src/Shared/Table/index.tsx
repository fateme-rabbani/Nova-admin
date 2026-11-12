import type { ReactNode } from "react";
import Spinner from "../Spinner";
import { Container, StyledTable } from "./styles";

interface TableColumn {
  key: string;
  title: string;
}

interface TableProps {
  columns: TableColumn[];
  children: ReactNode;
  label: string;
  loading: boolean;
  error?: string;
  empty: boolean;
  emptyMessage: string;
}

function Table({
  columns,
  children,
  label,
  loading,
  error,
  empty,
  emptyMessage,
}: TableProps) {
  let content = children;

  if (loading) {
    content = (
      <tr>
        <td colSpan={columns.length}>
          <Spinner />
        </td>
      </tr>
    );
  } else if (error) {
    content = (
      <tr>
        <td colSpan={columns.length}>
          <p>{error}</p>
        </td>
      </tr>
    );
  } else if (empty) {
    content = (
      <tr>
        <td colSpan={columns.length}>
          <p>{emptyMessage}</p>
        </td>
      </tr>
    );
  }

  return (
    <Container>
      <StyledTable
        $showState={loading || !!error || empty}
        aria-label={label}
        aria-busy={loading}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{content}</tbody>
      </StyledTable>
    </Container>
  );
}

export default Table;
