import type { ReactNode } from "react";
import { Container, StyledTable } from "./styles";

interface TableColumn {
  key: string;
  title: string;
}

interface TableProps {
  columns: TableColumn[];
  children: ReactNode;
  label: string;
}

function Table({ columns, children, label }: TableProps) {
  return (
    <Container>
      <StyledTable aria-label={label}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </StyledTable>
    </Container>
  );
}

export default Table;
