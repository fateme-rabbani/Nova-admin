import { Container, PageButton } from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel: string;
  nextLabel: string;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  previousLabel,
  nextLabel,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = [];

  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  return (
    <Container>
      <PageButton
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {previousLabel}
      </PageButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          type="button"
          className={currentPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      <PageButton
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {nextLabel}
      </PageButton>
    </Container>
  );
}

export default Pagination;
